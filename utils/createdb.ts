"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import z from "zod";
import { TicketSchema, UserInformationSchema } from "./zodschema";
import prisma from "./db";
import { inngest } from "./inngest/client";

export async function UpdateUser(data: z.infer<typeof UserInformationSchema>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  const validateData = UserInformationSchema.parse(data);

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      profileCreationCompleted: true,
      username: validateData.username,
      about: validateData.about,
      role: validateData.role,
      skills: validateData.skills,
    },
  });

  return redirect("/dashboard");
}

export async function CreateTicket(data: z.infer<typeof TicketSchema>) {
  const validateData = TicketSchema.parse(data);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  const ticket = await prisma.ticket.create({
    data: {
      title: validateData.title,
      description: validateData.description,
      creatorId: session.user.id,
    },
  });

  inngest.send({
    name: "ticket/created",
    data: { ticketId: ticket.id },
  });

  return redirect("/dashboard");
}

export async function UpdateUserProfile(
  data: z.infer<typeof UserInformationSchema>,
) {
  const validateData = UserInformationSchema.parse(data);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      about: validateData.about,
      username: validateData.username,
      role: validateData.role,
      skills: validateData.skills,
    },
  });

  return redirect("/dashboard");
}
