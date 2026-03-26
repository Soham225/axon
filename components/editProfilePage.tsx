"use client";

import { Role } from "@/app/generated/prisma/client";
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
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { BenefitSelector } from "./benefitselection";
import { Button } from "./ui/button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserInformationSchema } from "@/utils/zodschema";
import z from "zod";
import { UpdateUserProfile } from "@/utils/createdb";

interface iAppProps {
  data: {
    username: string | null;
    role: Role | null;
    about: string | null;
    skills: string[];
  };
}

export function EditProfilePage({ data }: iAppProps) {
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof UserInformationSchema>>({
    resolver: zodResolver(UserInformationSchema),
    defaultValues: {
      about: data.about as string,
      role: data.role as Role,
      skills: data.skills,
      username: data.username as string,
    },
  });

  async function FormSubmit(data: z.infer<typeof UserInformationSchema>) {
    try {
      setPending(true);
      await UpdateUserProfile(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        console.log("something went wrong", error);
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(FormSubmit)} className="space-y-6">
      <FieldSet>
        <FieldLegend className="text-4xl font-bold">
          User Information
        </FieldLegend>
        <FieldDescription className="text-sm text-muted-foreground">
          please fill up the following details
        </FieldDescription>
        <Separator />
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="username">User Name</FieldLabel>
                  <Input {...field} placeholder="your name" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="role">Role</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="cursor-pointer">
                      <SelectValue placeholder="role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="USER">USER</SelectItem>
                        <SelectItem value="MODERATOR">MODERATOR</SelectItem>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="about"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="about">About</FieldLabel>
                <Textarea {...field} placeholder="about your role ... " />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="skills"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="skills">Select your skills</FieldLabel>
                <BenefitSelector field={field} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>

      <Field>
        <Button
          disabled={pending}
          size={"lg"}
          className="w-full cursor-pointer"
          type="submit"
        >
          {pending ? "submitting ..." : "update profile"}
        </Button>
      </Field>
    </form>
  );
}
