import Link from "next/link";
import { LogInForm } from "./_components/page";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/user-details");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-4">
      <div className=" max-w-sm  w-full flex flex-col gap-4">
        <Link href={"/"} className="flex items-center justify-center">
          <span className="text-center text-3xl text-primary font-bold border border-primary rounded-xl p-1 px-2 hover:transition-all duration-300  hover:bg-primary/10">
            AXON
          </span>
        </Link>
        <LogInForm />
      </div>
    </div>
  );
}
