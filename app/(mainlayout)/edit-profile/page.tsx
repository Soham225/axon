import { EditProfilePage } from "@/components/editProfilePage";
import { Card } from "@/components/ui/card";
import { auth } from "@/utils/auth";
import prisma from "@/utils/db";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

export default async function EditProfile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return redirect("/log-in");
  }

  const data = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      username: true,
      about: true,
      role: true,
      skills: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return (
    <Card className="p-4">
      <EditProfilePage data={data} />
    </Card>
  );
}
