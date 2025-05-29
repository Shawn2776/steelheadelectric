import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Steelhead Electric <steelheadelectric25@gmail.com>",
      to: ["steelheadelectric25@gmail.com"], // or your email for now
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return new Response("Message sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to send", { status: 500 });
  }
}
