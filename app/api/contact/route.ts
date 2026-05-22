import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/contact";

export const runtime = "nodejs";

const inboxAddress = process.env.CONTACT_EMAIL_TO ?? "alishshakya44@gmail.com";

export async function POST(request: Request) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return Response.json(
        { message: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { message: "Please check the form fields and try again." },
        { status: 400 }
      );
    }

    const { name, phone, email, service, message } = parsed.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.GMAIL_USER}>`,
      to: inboxAddress,
      replyTo: email || process.env.GMAIL_USER,
      subject: `New consultation request: ${service}`,
      text: [
        "You received a new consultation request from the website.",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message || "No message provided.",
      ].join("\n"),
      html: `
        <h2>New consultation request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    return Response.json(
      { message: "We could not send your message right now. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
