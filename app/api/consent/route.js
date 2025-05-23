import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("host");
  const userAgent = req.headers.get("user-agent");

  const body = await req.json();
  const { userId } = body;

  await prisma.cookieConsent.create({
    data: {
      ip,
      userAgent,
      userId: userId || null,
    },
  });

  return NextResponse.json({ success: true });
}
