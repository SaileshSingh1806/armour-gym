import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, goal, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // In production, integrate with CRM, WhatsApp API, or email notification service (Resend / SendGrid)
    console.log("New Lead Received for Armour 24-7 Gym Ahmedabad:", {
      name,
      phone,
      email,
      goal,
      message,
      timestamp: new Date().toISOString(),
      location: "Ahmedabad, Gujarat 382445",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead recorded successfully. We will contact you shortly!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact lead:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

