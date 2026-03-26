import { auth } from "@/utils/auth";

import { headers } from "next/headers";
import { NavSession } from "./navsession/navComponent";

export async function NavBar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <NavSession session={session} />;
}
