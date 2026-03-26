import { Advertise } from "@/components/advertise";
import { Card } from "@/components/ui/card";

import { UserInfoForm } from "@/components/userinfoform";
import { auth } from "@/utils/auth";
import prisma from "@/utils/db";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserDetails() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/log-in");
  }

  const data = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
    select: {
      profileCreationCompleted: true,
    },
  });

  if (data?.profileCreationCompleted) {
    return redirect("/dashboard");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4 w-full h-fit col-span-1 md:col-span-2">
        <UserInfoForm />
      </Card>
      <div className="col-span-1">
        <Advertise />
      </div>
    </div>
  );
}
