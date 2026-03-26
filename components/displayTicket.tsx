import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Role, TicketStatus } from "@/app/generated/prisma/client";

interface iAppProps {
  createdTickets: {
    title: string;
    id: string;
    description: string;
    assignedTo: {
      email: string;
      name: string;
    } | null;
    ticketStatus: TicketStatus;
    creator: {
      image: string | null;
      username: string | null;
      role: Role | null;
      about: string | null;
      skills: string[];
      email: string;
      id: string;
      name: string;
      emailVerified: boolean;
      createdAt: Date;
      updatedAt: Date;
      profileCreationCompleted: boolean;
    };
  }[];
}

export function DisplayTicketComponent({ createdTickets }: iAppProps) {
  return (
    <div className="flex flex-wrap gap-6 space-y-4">
      {createdTickets.map((ticket) => (
        <Card key={ticket.id} className="max-w-md w-full ">
          <CardHeader className="space-y-2">
            <CardTitle className="flex gap-2 flex-wrap">
              <span className="text-primary font-semibold">Title:</span>
              {ticket.title}
            </CardTitle>
            <CardDescription className="flex gap-2 flex-wrap">
              <span className="text-primary font-semibold">Description:</span>{" "}
              {ticket.description}
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <span className="text-primary">Assigned To: </span>
                <div>
                  {ticket.assignedTo ? (
                    ticket.assignedTo.name
                  ) : (
                    <p className="flex gap-2 items-center">
                      <Loader2 className="animate-spin" size={16} />
                      processing ...
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-primary">Address: </span>
                <span>
                  {ticket.assignedTo ? (
                    ticket.assignedTo.email
                  ) : (
                    <p className="flex gap-2 items-center">
                      <Loader2 className="animate-spin" size={16} />
                      processing ...
                    </p>
                  )}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
