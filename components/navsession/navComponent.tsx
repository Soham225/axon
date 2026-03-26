"use client";

import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import { Loader2, LogOut } from "lucide-react";
import { ModeToggle } from "../theme-toggle";
import { UserProfile } from "../userProfile";
import { NavItems } from "../navItems";

interface iAppProps {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
  };
}

export function NavSession({ session }: { session: iAppProps | null }) {
  const router = useRouter();

  const [pending, setPending] = useState(false);

  async function SignOut() {
    try {
      setPending(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
            toast.success("Signed Out Successfully");
          },
        },
      });
    } catch {
      setPending(false);
    }
  }

  return (
    <div className="flex justify-around items-center p-2 rounded-xl border hover:border-primary transition-colors duration-500">
      <div className="flex justify-center items-center gap-2">
        <Link
          href="/"
          className="flex items-center border border-primary rounded-xl px-2 py-1 hover:transition-all duration-300  hover:bg-primary/10"
        >
          <span className="text-primary font-bold text-xl">AXON</span>
        </Link>
      </div>

      <NavItems />
      <div className="flex justify-center items-center gap-2">
        {session ? (
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button
              disabled={pending}
              className="cursor-pointer"
              onClick={SignOut}
              size={"lg"}
            >
              {pending ? (
                <div className="flex gap-2 items-center">
                  <span>
                    {" "}
                    <Loader2 size={16} className="animate-spin" />{" "}
                  </span>
                  <span>
                    {" "}
                    <LogOut size={16} />{" "}
                  </span>
                </div>
              ) : (
                <span>Sign Out</span>
              )}
            </Button>
            <UserProfile
              email={session.user.email}
              image={session.user.image ?? ""}
              name={session.user.name}
            />
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Link
              className={buttonVariants({ variant: "secondary", size: "lg" })}
              href={"/log-in"}
            >
              Log In
            </Link>
            <Link className={buttonVariants({ size: "lg" })} href={"/log-in"}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
