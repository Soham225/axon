import { NonRetriableError } from "inngest";
import { inngest } from "./inngest/client";
import prisma from "./db";
import { analyzeTicket, selectModerator } from "./ai";
import { pusherServer } from "./pusher-server";
import { sendTicketAssignedEmail } from "./mailer";

export const onTicketCreated = inngest.createFunction(
  {
    id: "on-ticket-created",
    retries: 2,
    triggers: [{ event: "ticket/created" }],
  },

  async ({ event, step }) => {
    const { ticketId } = event.data as { ticketId: string };

    /* ---------------- FETCH TICKET ---------------- */

    const ticket = await step.run("fetch-ticket", async () => {
      const ticketObject = await prisma.ticket.findUnique({
        where: { id: ticketId },
      });

      if (!ticketObject) {
        throw new NonRetriableError("Ticket not found");
      }

      return ticketObject;
    });

    /* ---------------- UPDATE STATUS ---------------- */

    await step.run("update-ticket-status", async () => {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: { ticketStatus: "IN_PROGRESS" },
      });

      await pusherServer.trigger("tickets", "ticket-updated", {
        ticketId: ticket.id,
      });
    });

    /* ---------------- AI ANALYSIS ---------------- */

    const aiResponse = await analyzeTicket(ticket);
    console.log("AI response:", aiResponse);

    const relatedSkills = await step.run("store-ai-results", async () => {
      if (!aiResponse) return [];

      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          priority: aiResponse.priority?.toLowerCase(),
          helpfulNotes: aiResponse.helpfulNotes,
        },
      });

      return aiResponse.relatedSkills ?? [];
    });

    /* ---------------- FIND CANDIDATE MODERATORS ---------------- */

    const candidates = await step.run("find-candidates", async () => {
      if (!relatedSkills.length) return [];

      return prisma.user.findMany({
        where: {
          role: "MODERATOR",
          skills: { hasSome: relatedSkills },
        },
        select: {
          id: true,
          name: true,
          about: true,
          email: true,
          skills: true,
        },
      });
    });

    /* ---------------- AI CHOOSES MODERATOR ---------------- */

    const chosenId = await step.run("ai-select-moderator", async () => {
      if (!candidates.length) return null;

      return selectModerator(ticket, candidates);
    });

    const moderator =
      candidates.find((m) => m.id === chosenId) ?? candidates[0] ?? null;

    /* ---------------- FALLBACK ADMIN ---------------- */

    const finalUser = await step.run("resolve-user", async () => {
      if (moderator) return moderator;

      return prisma.user.findFirst({
        where: { role: "ADMIN" },
      });
    });

    /* ---------------- ASSIGN TICKET ---------------- */

    await step.run("assign-ticket", async () => {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          assignedToId: finalUser?.id ?? null,
        },
      });

      await pusherServer.trigger("tickets", "ticket-assigned", {
        ticketId: ticket.id,
        assignedToId: finalUser?.id,
      });
    });

    await step.run("send-email", async () => {
      if (!finalUser?.email) return;

      await sendTicketAssignedEmail({
        to: finalUser.email,
        name: finalUser.name ?? "Moderator",
        title: ticket.title,
        description: ticket.description,
      });
    });

    console.log("Assigned to:", finalUser?.id);

    return { success: true };
  },
);
