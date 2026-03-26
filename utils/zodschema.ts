import z from "zod";

export const UserInformationSchema = z.object({
  username: z.string().min(2, "Username has to be at least 2 characters long"),
  role: z.enum(["USER", "MODERATOR", "ADMIN"], {
    message: "Please select a role",
  }),
  about: z.string().min(10, "please tell us some more about your skills"),
  skills: z.array(z.string()).min(1, "please select your skills"),
});

export const TicketSchema = z.object({
  title: z.string().min(1, "Please provide a title"),
  description: z.string().min(10, "Please tell us more"),
});
