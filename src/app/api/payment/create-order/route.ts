import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, planId, planName, amount } = body;

    if (!name || !email || !phone || !amount) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, phone, amount)." },
        { status: 400 }
      );
    }

    const orderId = "ARMOUR_" + Date.now() + "_" + Math.floor(100 + Math.random() * 900);
    const customerId = "CUST_" + phone.replace(/[^0-9]/g, "").slice(-10);

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const environment = process.env.CASHFREE_ENV || "SANDBOX";

    // If live credentials are provided in .env.local
    if (appId && secretKey && appId !== "YOUR_CASHFREE_APP_ID") {
      const baseUrl =
        environment === "PRODUCTION"
          ? "https://api.cashfree.com/pg/orders"
          : "https://sandbox.cashfree.com/pg/orders";

      const orderPayload = {
        order_id: orderId,
        order_amount: Number(amount),
        order_currency: "INR",
        customer_details: {
          customer_id: customerId,
          customer_name: name,
          customer_email: email,
          customer_phone: phone.replace(/[^0-9]/g, "").slice(-10),
        },
        order_meta: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment/status?order_id={order_id}&name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}`,
        },
        order_note: `Membership Order for ${planName || "Armour Gym Pass"}`,
      };

      const cfRes = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": appId,
          "x-client-secret": secretKey,
          "x-api-version": "2023-08-01",
        },
        body: JSON.stringify(orderPayload),
      });

      const cfData = await cfRes.json();

      if (!cfRes.ok) {
        return NextResponse.json(
          { success: false, error: cfData.message || "Payment Gateway Order Failed" },
          { status: cfRes.status }
        );
      }

      return NextResponse.json({
        success: true,
        isLive: true,
        order_id: orderId,
        payment_session_id: cfData.payment_session_id,
        environment,
      });
    }

    // Seamless Fallback (Demo / Test Mode)
    return NextResponse.json({
      success: true,
      isLive: false,
      order_id: orderId,
      message: "Order initiated in demo verification mode.",
    });
  } catch (error: any) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
