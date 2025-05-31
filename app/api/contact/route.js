import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  // Optional spam check (honeypot)
  if (body.hiddenField) {
    return new Response("Spam detected", { status: 400 });
  }

  const { name, email, phone, message } = body;

  try {
    await resend.emails.send({
      from: "Steelhead Electric <admin@steelheadelectric.pro>",
      to: "steelheadelectric25@gmail.com", // where the message goes
      subject: `New Contact Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    return new Response("Message sent", { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response("Failed to send", { status: 500 });
  }
}
