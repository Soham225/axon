"use client";

import { pusherClient } from "@/utils/pusher-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RealtimeListener() {
  const router = useRouter();

  useEffect(() => {
    const channel = pusherClient.subscribe("tickets");

    channel.bind("ticket-assigned", () => {
      router.refresh();
    });

    return () => {
      pusherClient.unsubscribe("tickets");
    };
  }, [router]);

  return null;
}
