"use client";

import { Loader2 } from "lucide-react";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconParkOutlineGithub, MeteorIconsGoogle } from "@/components/logo";

export function LogInForm() {
  const [githubPending, setGitPending] = useState(false);
  const [googlePending, setGooglePending] = useState(false);

  async function githublogin() {
    try {
      setGitPending(true);
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/user-details",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged in successfully");
          },
          onError: () => {
            toast.error("Internal Server Error");
          },
        },
      });
    } catch {
      setGitPending(false);
    }
  }

  async function googleLogIn() {
    try {
      setGooglePending(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/user-details",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Logged in successfully");
          },
          onError: () => {
            toast.error("Internal Server Error");
          },
        },
      });
    } catch {
      setGooglePending(false);
    }
  }

  return (
    <Card className="flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="text-center font-semibold text-2xl">
          Welcome to <span className="text-primary">AXON</span>
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Log in with your Google or GitHub account
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-5 my-3">
        <Button
          size={"lg"}
          variant="outline"
          disabled={githubPending}
          onClick={githublogin}
          className="w-full cursor-pointer  "
        >
          {githubPending ? (
            <div className="w-full flex items-center gap-2 justify-center">
              <span>
                <Loader2 size={16} className="animate-spin" />
              </span>
              <span>loading ...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <IconParkOutlineGithub />
              <span>Log in with GitHub</span>
            </div>
          )}
        </Button>
        <Button
          size={"lg"}
          variant="outline"
          disabled={googlePending}
          onClick={googleLogIn}
          className="w-full cursor-pointer"
        >
          {googlePending ? (
            <div className="w-full flex items-center gap-2 justify-center">
              <span>
                <Loader2 size={16} className="animate-spin" />
              </span>
              <span>loading ...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <MeteorIconsGoogle />
              <span>Log in with Google</span>
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
