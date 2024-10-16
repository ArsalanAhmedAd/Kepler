import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { username, phone, email, messageBody } = await req.json();

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email
    to: email, // Send to the user who filled the form (you can also specify a fixed recipient)
    subject: "New Contact Form Submission",
    text: `
      Username: ${username}
      Phone: ${phone}
      Email: ${email}
      Message: ${messageBody}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Check if error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    } else {
      // Fallback for non-Error types
      return NextResponse.json(
        { error: "Failed to send email", details: String(error) },
        { status: 500 }
      );
    }
  }
}
