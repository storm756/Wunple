import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Timestamped submission record
    const enquiry = {
      id: `enquiry_${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: `${firstName} ${lastName || ""}`.trim(),
      email,
      subject: subject || "General Inquiry",
      message
    };

    // Log to server console
    console.log("📬 [New Customer Contact Message Received]:", enquiry);

    // In production, integrate with email services like Resend, Nodemailer, or Formspree
    return NextResponse.json({
      success: true,
      message: "Your message has been received! Our team will contact you soon.",
      enquiryId: enquiry.id
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
