import { AssignedTicket } from "@/components/assignedTicketShow";
import { RealtimeListener } from "@/components/realtime-listener";
import { auth } from "@/utils/auth";
import prisma from "@/utils/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DisplayAssignedTicket() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  const data = await prisma.ticket.findMany({
    where: {
      assignedToId: session.user.id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      ticketStatus: true,
      priority: true,
      helpfulNotes: true,
      creator: {
        select: {
          name: true,
          email: true,
          username: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <RealtimeListener />
      <AssignedTicket data={data} />
    </>
  );
}
