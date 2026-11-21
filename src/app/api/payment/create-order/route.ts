import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { findMembershipPlan } from "@/lib/membership";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const data: unknown = await req.json();
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
    }
    body = data as Record<string, unknown>;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const plan = findMembershipPlan(body.planId);
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.replace(/\D/g, "") : "";
  const normalizedPhone = phone.startsWith("91") && phone.length === 12 ? phone.slice(2) : phone;

  if (!plan || name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 || !/^[6-9]\d{9}$/.test(normalizedPhone)) {
    return NextResponse.json(
      { success: false, error: "A valid membership, name, email and Indian mobile number are required." },
      { status: 400 },
    );
  }

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  const environment = process.env.CASHFREE_ENV === "PRODUCTION" ? "PRODUCTION" : "SANDBOX";

  if (!appId || !secretKey || appId === "YOUR_CASHFREE_APP_ID") {
    return NextResponse.json(
      { success: false, error: "Online payments are currently unavailable. Please contact the gym." },
      { status: 503 },
    );
  }

  const orderId = "ARMOUR_" + randomUUID().replace(/-/g, "").slice(0, 24);
  const baseUrl = environment === "PRODUCTION"
    ? "https://api.cashfree.com/pg/orders"
    : "https://sandbox.cashfree.com/pg/orders";

  try {
    const origin = new URL(
      process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin,
    ).origin;
    if (environment === "PRODUCTION" && !origin.startsWith("https://")) {
      throw new Error("Payment return URL must use HTTPS in production");
    }

    // Never trust client-supplied amounts or descriptions.
    const cfRes = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
      cache: "no-store",
      body: JSON.stringify({
        order_id: orderId,
        order_amount: plan.price,
        order_currency: "INR",
        customer_details: {
          customer_id: "CUST_" + normalizedPhone,
          customer_name: name,
          customer_email: email,
          customer_phone: normalizedPhone,
        },
        order_meta: {
          return_url: origin + "/payment/status?order_id={order_id}",
        },
        order_note: "ARMOUR 24-7 " + plan.label,
      }),
    });

    const cfData: unknown = await cfRes.json();
    if (!cfRes.ok || !cfData || typeof cfData !== "object") {
      return NextResponse.json(
        { success: false, error: "Unable to initiate payment. Please try again." },
        { status: 502 },
      );
    }

    const data = cfData as { payment_session_id?: unknown };
    if (typeof data.payment_session_id !== "string") {
      return NextResponse.json({ success: false, error: "Invalid payment session response." }, { status: 502 });
    }

    return NextResponse.json({
      success: true,
      isLive: environment === "PRODUCTION",
      order_id: orderId,
      payment_session_id: data.payment_session_id,
      environment,
    });
  } catch (error: unknown) {
    console.error("Cashfree order creation failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { success: false, error: "Payment service is currently unavailable." },
      { status: 503 },
    );
  }
}
