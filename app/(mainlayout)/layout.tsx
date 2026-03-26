import { NavBar } from "@/components/navbar";
import { ReactNode } from "react";

export default function Main_Layout({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 md:p-4 flex flex-col gap-6">
      <NavBar />
      {children}
    </div>
  );
}
