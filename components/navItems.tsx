import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function NavItems() {
  return (
    <div className="hidden md:flex items-center gap-4 pl-24">
      <Link
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "cursor-pointer",
        )}
        href={"/"}
      >
        Home
      </Link>

      <Link
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "cursor-pointer",
        )}
        href={"/ticket-creation"}
      >
        Create Ticket
      </Link>

      <Link
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "cursor-pointer",
        )}
        href={"/dashboard"}
      >
        Dashboard
      </Link>

      <Link
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "cursor-pointer",
        )}
        href={"/show-assigned-ticket"}
      >
        Tickets
      </Link>

      <Link
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "cursor-pointer",
        )}
        href={"/edit-profile"}
      >
        Edit Profile
      </Link>
    </div>
  );
}
