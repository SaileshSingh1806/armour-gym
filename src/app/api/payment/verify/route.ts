import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId } = body;

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: "Order ID is required." },
        { status: 400 }
      );
    }

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const environment = process.env.CASHFREE_ENV || "SANDBOX";

    if (appId && secretKey && appId !== "YOUR_CASHFREE_APP_ID") {
      const baseUrl =
        environment === "PRODUCTION"
          ? `https://api.cashfree.com/pg/orders/${orderId}`
          : `https://sandbox.cashfree.com/pg/orders/${orderId}`;

      const cfRes = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-client-id": appId,
          "x-client-secret": secretKey,
          "x-api-version": "2023-08-01",
        },
      });

      const cfData = await cfRes.json();

      return NextResponse.json({
        success: true,
        order_status: cfData.order_status,
        data: cfData,
      });
    }

    return NextResponse.json({
      success: true,
      order_status: "PAID",
      message: "Order verified in demo mode.",
    });
  } catch (error: any) {
    console.error("Verify order error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
