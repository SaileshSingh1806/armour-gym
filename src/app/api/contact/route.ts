import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Enquiry = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  program?: unknown;
  goal?: unknown;
  message?: unknown;
  website?: unknown;
};

const jsonError = (message: string, status: number) =>
  NextResponse.json({ success: false, message }, { status });

function readText(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value !== "string" || value.length > maxLength) return null;
  return value.trim();
}

function normalizeIndianMobile(value: string): string | null {
  const digits = value.replace(/\D/g, "");
  const normalized = digits.length === 12 && digits.startsWith("91")
    ? digits.slice(2)
    : digits;
  return /^[6-9]\d{9}$/.test(normalized) ? normalized : null;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return jsonError("Enquiry is too large.", 413);
  }

  let body: Enquiry;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return jsonError("Invalid enquiry data.", 400);
    }
    body = parsed as Enquiry;
  } catch {
    return jsonError("Please submit valid enquiry details.", 400);
  }

  // Honeypot: discard obvious automated submissions without sending messages.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ success: true, message: "Thank you for your enquiry." });
  }

  const name = readText(body.name, 100);
  const rawPhone = readText(body.phone, 24);
  const email = readText(body.email, 254);
  const program = readText(body.program ?? body.goal, 120);
  const message = readText(body.message, 1500);

  if (!name || name.length < 2 || !rawPhone || email === null || program === null || message === null) {
    return jsonError("Enter a valid name, phone number and enquiry details.", 400);
  }

  const phone = normalizeIndianMobile(rawPhone);
  if (!phone) return jsonError("Enter a valid Indian mobile number.", 400);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Enter a valid email address.", 400);
  }

  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  if (!smtpUser || !smtpPass) {
    console.error("Enquiry delivery unavailable: SMTP is not configured.");
    return jsonError("Enquiries are temporarily unavailable. Please contact us by phone or WhatsApp.", 503);
  }

  const timestamp = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    const result = await transporter.sendMail({
      from: { name: "ARMOUR 24-7 Website", address: smtpUser },
      to: "armour247gym@gmail.com",
      replyTo: email || undefined,
      subject: "New ARMOUR gym membership enquiry",
      text: [
        "NEW MEMBERSHIP ENQUIRY",
        "Name: " + name,
        "Phone: +91" + phone,
        "Email: " + (email || "Not provided"),
        "Interest: " + (program || "General membership"),
        "Notes: " + (message || "None"),
        "Received: " + timestamp,
      ].join("\n"),
    });
    if (!result.accepted?.length) {
      throw new Error("No SMTP recipient accepted the message");
    }
    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Your enquiry has been sent to the ARMOUR team.",
    });
  } catch (error: unknown) {
    console.error("Enquiry SMTP delivery failed:", error instanceof Error ? error.message : "Unknown SMTP error");
    return jsonError("We could not send your enquiry. Please call or WhatsApp our team.", 503);
  }
}
