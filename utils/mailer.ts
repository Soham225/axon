import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendTicketAssignedEmail({
  to,
  name,
  title,
  description,
}: {
  to: string;
  name: string;
  title: string;
  description: string;
}) {
  await transporter.sendMail({
    from: `"AI Helpdesk" <${process.env.EMAIL_USER}>`,
    to,
    subject: "New Ticket Assigned",
    html: `
      <h2>New Ticket Assigned</h2>
      <p>Hello ${name ?? "Moderator"},</p>
      <p>You have been assigned a new support ticket.</p>

      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Description:</strong> ${description}</p>

      <p>Please check your dashboard.</p>
    `,
  });
}
