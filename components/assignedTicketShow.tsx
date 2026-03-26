import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";
import { TicketStatus } from "@/app/generated/prisma/client";

interface iAppProps {
  title: string;
  id: string;
  description: string;
  ticketStatus: TicketStatus;
  priority: string | null;
  helpfulNotes: string | null;
  creator: {
    email: string;
    name: string;
    username: string | null;
  };
}

export function AssignedTicket({ data }: { data: iAppProps[] }) {
  if (data.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Card className="max-w-md w-full p-4 mt-10">
          <CardHeader>
            <CardTitle className="font-bold font-mono text-center">
              You Have Not Been Assigned Any Job
            </CardTitle>
            <CardDescription className="text-muted-foreground text-center">
              If you are assigned a job, you will see it here
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
    );
  }

  return (
    <div className="space-y-6 flex flex-wrap gap-4">
      {data.map((item) => (
        <Card key={item.id} className="max-w-md w-full h-fit">
          <CardHeader className="space-y-3">
            <CardTitle className="flex gap-2 flex-wrap">
              <span className="text-primary font-semibold">Title:</span>
              {item.title}
            </CardTitle>
            <CardDescription className="flex gap-2 flex-wrap">
              <span className="text-primary font-semibold">Description</span>
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-semibold">
                  Helpful Note:
                </span>
                <p className="text-sm">
                  {item.helpfulNotes ?? "No Notes Provided"}
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span className="text-primary font-semibold">
                  Created By -{" "}
                </span>
                <span>{item.creator.username ?? item.creator.name}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
