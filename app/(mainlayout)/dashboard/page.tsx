import { Advertise } from "@/components/advertise";
import { DisplayTicketComponent } from "@/components/displayTicket";
import { RealtimeListener } from "@/components/realtime-listener";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { auth } from "@/utils/auth";
import prisma from "@/utils/db";
import { ArrowLeft } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return redirect("/log-in");
  }

  const tickets = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      createdTickets: {
        select: {
          id: true,
          creator: true,
          title: true,
          description: true,
          ticketStatus: true,
          assignedTo: {
            select: {
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 gap-6">
      <div className="col-span-1 md:col-span-2">
        <RealtimeListener />
        {tickets?.createdTickets.length !== 0 ? (
          <DisplayTicketComponent
            createdTickets={tickets?.createdTickets ?? []}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <Card className="max-w-md w-full p-4 mt-10">
              <CardHeader>
                <CardTitle className="font-bold font-mono text-center">
                  You Have Not Created Any Ticket
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center">
                  Tickets Created By You Will Be Displayed Here
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="flex gap-4 flex-col">
                <Link
                  href={"/"}
                  className={cn(buttonVariants(), "flex items-center gap-2")}
                >
                  <span>
                    <ArrowLeft size={16} />
                  </span>
                  <span>Go Back To Homepage</span>
                </Link>

                <Link
                  href={"/ticket-creation"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "flex items-center gap-2",
                  )}
                >
                  <span>
                    <ArrowLeft size={16} />
                  </span>
                  <span>Create A Ticket</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <div>
        <Advertise />
      </div>
    </div>
  );
}
