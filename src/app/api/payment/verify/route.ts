import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let orderId: unknown;
  try {
    const body: unknown = await req.json();
    orderId = body && typeof body === "object" && "orderId" in body
      ? (body as { orderId: unknown }).orderId
      : undefined;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  if (typeof orderId !== "string" || !/^[A-Za-z0-9_-]{8,80}$/.test(orderId)) {
    return NextResponse.json({ success: false, error: "Invalid order ID." }, { status: 400 });
  }

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  if (!appId || !secretKey || appId === "YOUR_CASHFREE_APP_ID") {
    return NextResponse.json(
      { success: false, error: "Payment verification is currently unavailable." },
      { status: 503 },
    );
  }

  const environment = process.env.CASHFREE_ENV === "PRODUCTION" ? "PRODUCTION" : "SANDBOX";
  const baseUrl = environment === "PRODUCTION"
    ? "https://api.cashfree.com/pg/orders/"
    : "https://sandbox.cashfree.com/pg/orders/";

  try {
    const cfRes = await fetch(baseUrl + encodeURIComponent(orderId), {
      headers: {
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
      cache: "no-store",
    });
    if (!cfRes.ok) {
      return NextResponse.json(
        { success: false, error: "The payment provider could not verify this order." },
        { status: 502 },
      );
    }
    const data: unknown = await cfRes.json();
    const status = data && typeof data === "object" && "order_status" in data
      ? (data as { order_status: unknown }).order_status
      : undefined;
    if (typeof status !== "string") {
      return NextResponse.json({ success: false, error: "Invalid gateway response." }, { status: 502 });
    }
    return NextResponse.json({
      success: true,
      verified: environment === "PRODUCTION" && status === "PAID",
      testPayment: environment === "SANDBOX" && status === "PAID",
      order_status: status,
      environment,
    });
  } catch (error: unknown) {
    console.error("Cashfree verification failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ success: false, error: "Payment verification unavailable." }, { status: 503 });
  }
}
