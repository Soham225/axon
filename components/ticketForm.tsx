"use client";

import { Controller, useForm } from "react-hook-form";
import { Card } from "./ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Separator } from "./ui/separator";
import z from "zod";
import { TicketSchema } from "@/utils/zodschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { CreateTicket } from "@/utils/createdb";

export function TicketForm() {
  const [pending, setPending] = useState(false);

  async function Submit(data: z.infer<typeof TicketSchema>) {
    try {
      setPending(true);
      await CreateTicket(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log("something went wrong", error);
      }
    } finally {
      setPending(false);
    }
  }

  const form = useForm<z.infer<typeof TicketSchema>>({
    resolver: zodResolver(TicketSchema),
    defaultValues: {
      description: "",
      title: "",
    },
  });

  return (
    <Card className="p-4 max-w-md w-full mt-20">
      <form className="space-y-6" onSubmit={form.handleSubmit(Submit)}>
        <FieldSet>
          <FieldLegend>Create Tickets</FieldLegend>
          <FieldDescription>
            Create your ticket and get your problem solved
          </FieldDescription>
          <Separator />
          <FieldGroup>
            <div className="flex flex-col gap-4">
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Title</FieldLabel>
                    <Input {...field} placeholder="title ... " />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Description</FieldLabel>
                    <Textarea
                      {...field}
                      placeholder="describe the problem ... "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </FieldSet>

        <Field>
          <Button
            type="submit"
            disabled={pending}
            className="w-full cursor-pointer"
          >
            {pending ? "submitting..." : "Submit"}
          </Button>
        </Field>
      </form>
    </Card>
  );
}
