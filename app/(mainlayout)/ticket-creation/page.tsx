import { TicketForm } from "@/components/ticketForm";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashBoard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      <TicketForm />
    </div>
  );
}
