import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[^\u0000-\u001F\u007F]+$/),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(24).regex(/^[+]?[\d\s().-]+$/),
  checkIn: z.string().optional().default(""),
  checkOut: z.string().optional().default(""),
  guests: z.number().int().min(1).max(6),
  message: z.string().trim().max(1200).optional().default(""),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(""),
});

type RateRecord = { count: number; resetAt: number };
const requestCounts = new Map<string, RateRecord>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function json(message: string, status: number) {
  return NextResponse.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

function validDate(value: string) {
  if (!value) return true;
  const date = new Date(value + "T00:00:00.000Z");
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return json("This request could not be accepted.", 403);

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 16000) return json("Your message is too long.", 413);
    body = JSON.parse(rawBody);
  } catch {
    return json("Please send a valid enquiry.", 400);
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return json("Please review the required fields and try again.", 400);
  const enquiry = parsed.data;

  if (enquiry.checkIn && enquiry.checkOut && enquiry.checkOut <= enquiry.checkIn) {
    return json("Choose a check-out date after check-in.", 400);
  }
  if (!validDate(enquiry.checkIn) || !validDate(enquiry.checkOut)) {
    return json("Please choose valid dates.", 400);
  }
  const today = new Date().toISOString().slice(0, 10);
  if ((enquiry.checkIn && enquiry.checkIn < today) || (enquiry.checkOut && enquiry.checkOut < today)) {
    return json("Dates must be today or later.", 400);
  }

  // A filled honeypot is silently accepted so automated spam does not learn the filter.
  if (enquiry.website) return NextResponse.json({ ok: true }, { status: 202, headers: { "Cache-Control": "no-store" } });

  const forwarded = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
  const key = forwarded.split(",")[0].trim().slice(0, 64);
  const now = Date.now();
  const current = requestCounts.get(key);
  if (current && now > current.resetAt) requestCounts.delete(key);
  if (requestCounts.size > 5000) {
    for (const [ip, record] of requestCounts) {
      if (now > record.resetAt) requestCounts.delete(ip);
    }
  }
  const active = requestCounts.get(key);
  if (active && active.count >= MAX_REQUESTS) return json("Please wait before sending another enquiry.", 429);
  requestCounts.set(key, active
    ? { count: active.count + 1, resetAt: active.resetAt }
    : { count: 1, resetAt: now + WINDOW_MS });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRY_TO_EMAIL;
  const sender = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return json("Enquiry email is not configured yet. Please book or message the host on Airbnb.", 503);
  }

  const stayDates = enquiry.checkIn || enquiry.checkOut
    ? "Requested dates: " + (enquiry.checkIn || "not specified") + " to " + (enquiry.checkOut || "not specified")
    : "Requested dates: not specified";
  const message = [
    "New Manishree Residency website enquiry",
    "",
    "Name: " + enquiry.name,
    "Email: " + enquiry.email,
    "Phone: " + enquiry.phone,
    stayDates,
    "Guests: " + enquiry.guests,
    "",
    "Message:",
    enquiry.message || "(none)",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: enquiry.email,
        subject: "New stay enquiry · " + enquiry.name,
        text: message,
      }),
    });
    if (!response.ok) return json("We could not send your enquiry. Please try Airbnb or contact the host there.", 502);
    return NextResponse.json(
      { ok: true },
      { status: 200, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return json("We could not send your enquiry. Please try Airbnb or contact the host there.", 502);
  }
}
