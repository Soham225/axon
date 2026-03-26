"use client";

import {
  ArrowBigRight,
  BarChart3,
  CirclePlus,
  Code2,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Homepage() {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="relative py-6">
        <div className="mx-auto max-w-4xl text-center ">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary p-2 text-center px-4">
            <Code2 size={20} className="text-primary" strokeWidth={3} />
            AI-Powered Issue Management
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-balance flex flex-col">
            <span>Transform Issue Management with</span>
            <span className="text-primary">AXON</span>
          </h1>

          <p className="mb-12 text-lg text-foreground/70 ">
            Automatically route issues to the most suitable moderators using
            advanced AI. Reduce response times, improve resolution quality, and
            streamline your support workflow.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={"/ticket-creation"}
              className={cn(buttonVariants({ size: "lg" }), "p-2")}
            >
              Start Using
              <ArrowBigRight size={16} />
            </Link>
            <Link
              href={"/ticket-creation"}
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "p-2",
              )}
            >
              Create Ticket
              <CirclePlus size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Powerful Features</h2>
            <p className="text-foreground/60 ">
              Everything you need for intelligent issue management
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Feature 1 */}
            <Card className=" bg-card/50 p-8 backdrop-blur border border-transparent hover:border-primary transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Instant AI Assignment
              </h3>
              <p className="text-foreground/70">
                Leverage machine learning to automatically match issues with the
                most qualified moderators in real-time.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className=" border border-transparent hover:border-primary transition-all duration-300 bg-card/50 p-8 backdrop-blur">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Distribution</h3>
              <p className="text-foreground/70">
                Balance workload intelligently across your team based on
                expertise, availability, and historical performance.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className=" bg-card/50 p-8 backdrop-blur border border-transparent hover:border-primary transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Advanced Analytics</h3>
              <p className="text-foreground/70">
                Get detailed insights into resolution times, moderator
                performance, and issue trends with real-time dashboards.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className=" bg-card/50 p-8 backdrop-blur border border-transparent hover:border-primary transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Team Collaboration</h3>
              <p className="text-foreground/70">
                Seamless communication between team members with integrated
                notes, file sharing, and real-time updates.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-primary">
            How It Works
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                1
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  User Submits Issue
                </h3>
                <p className="text-foreground/70">
                  Users describe their issue with context, attachments, and
                  priority level through an intuitive form.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                2
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  AI Analysis & Categorization
                </h3>
                <p className="text-foreground/70">
                  Our AI engine analyzes the issue, extracts key information,
                  and categorizes it based on type and complexity.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                3
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Smart Assignment</h3>
                <p className="text-foreground/70">
                  The system intelligently routes the issue to the best-suited
                  moderator based on expertise and workload.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                4
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Resolution & Feedback
                </h3>
                <p className="text-foreground/70">
                  Moderators resolve the issue while maintaining real-time
                  communication. Users provide feedback for continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-primary">AXON</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
