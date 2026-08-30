import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, goal, message, program } = body;

    const selectedService = program || goal || "Standard Gym Membership";

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Full Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log("=========================================");
    console.log("🔥 NEW ARMOUR 24-7 GYM ENQUIRY RECEIVED");
    console.log("Name:     ", name);
    console.log("Phone:    ", phone);
    console.log("Email:    ", email || "Not provided");
    console.log("Interest: ", selectedService);
    console.log("Notes:    ", message || "None");
    console.log("Time:     ", timestamp);
    console.log("Address:   C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad 382445");
    console.log("=========================================");

    // Configure Nodemailer transporter (Supports Gmail App Password or custom SMTP)
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
    const targetEmail = "armour247gym@gmail.com";

    let emailSent = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; border: 2px solid #ff2a3b; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #ff2a3b; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; color: #ffffff;">
                ARMOUR 24-7 GYM
              </h1>
              <p style="margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px; color: #ffffff; opacity: 0.9;">
                NEW MEMBERSHIP & TRIAL ENQUIRY
              </p>
            </div>
            
            <div style="padding: 24px;">
              <p style="font-size: 15px; color: #dddddd; margin-top: 0;">
                You have received a new inquiry from the website:
              </p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="border-bottom: 1px solid #222222;">
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase; width: 140px;">Full Name</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 16px; font-weight: bold;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #222222;">
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase;">Phone Number</td>
                  <td style="padding: 10px 0; color: #ff2a3b; font-size: 16px; font-weight: bold;">
                    <a href="tel:${phone}" style="color: #ff2a3b; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #222222;">
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase;">Email Address</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${email || "Not Provided"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #222222;">
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase;">Interest / Goal</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: bold;">${selectedService}</td>
                </tr>
                <tr style="border-bottom: 1px solid #222222;">
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase;">Additional Notes</td>
                  <td style="padding: 10px 0; color: #cccccc; font-size: 13px;">${message || "None"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888888; font-size: 13px; text-transform: uppercase;">Timestamp</td>
                  <td style="padding: 10px 0; color: #888888; font-size: 12px;">${timestamp}</td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 30px;">
                <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px; margin-right: 10px; font-size: 13px;">
                  💬 WhatsApp Lead
                </a>
                <a href="tel:${phone}" style="display: inline-block; background-color: #ff2a3b; color: #ffffff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 4px; font-size: 13px;">
                  📞 Call Lead
                </a>
              </div>
            </div>

            <div style="background-color: #111111; padding: 12px; text-align: center; font-size: 11px; color: #666666; border-top: 1px solid #222222;">
              Armour 24-7 Gym • C-601, 602 Shalin Square, Hathijan Circle, Ahmedabad — 382445
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Armour 24-7 Website" <${smtpUser}>`,
          to: targetEmail,
          replyTo: email || undefined,
          subject: `🔥 New Gym Enquiry: ${name} (${selectedService})`,
          html: htmlContent,
        });

        emailSent = true;
        console.log(`✅ Email successfully dispatched to ${targetEmail}`);
      } catch (mailErr) {
        console.error("Nodemailer dispatch failed (Check SMTP credentials):", mailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        emailSent,
        targetEmail,
        message: "Enquiry recorded successfully. Our team will contact you shortly!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enquiry lead:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
