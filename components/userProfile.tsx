import {
  ChevronDown,
  ClipboardList,
  House,
  LayoutDashboard,
  SquarePlus,
  UserPen,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

interface iAppProps {
  name: string;
  email: string;
  image: string;
}

export function UserProfile({ email, image, name }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Button variant={"ghost"} className="p-1 h-auto hover:bg-transparent">
          <Avatar>
            <AvatarImage src={image} alt="user-icon" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <ChevronDown size={16} strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto">
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-sm font-medium text-muted-foreground">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="md:hidden" />

        <DropdownMenuGroup className="md:hidden">
          <DropdownMenuItem asChild>
            <Link href={"/"}>
              <House size={16} strokeWidth={2} className="opacity-60" />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={"/ticket-creation"}>
              <SquarePlus className="opacity-60" size={16} strokeWidth={2} />
              <span>create ticket</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={"/dashboard"}>
              <LayoutDashboard
                size={16}
                strokeWidth={2}
                className="opacity-60"
              />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={"/show-assigned-ticket"}>
              <ClipboardList className="opacity-60" size={16} strokeWidth={2} />
              <span>Tickets</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={"/edit-profile"}>
              <UserPen className="opacity-60" size={16} strokeWidth={2} />
              <span>Edit Profile</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
