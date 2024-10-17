// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   const emailadd = "imarsalanahmed77@gamil.com";
//   const { username, phone, email, messageBody } = await req.json();
//   let mailOptions = {};
//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // or another email service
//     auth: {
//       user: process.env.EMAIL_USER, // Your email
//       pass: process.env.EMAIL_PASS, // Your email password
//     },
//   });

//   if (messageBody) {
//     // Email options
//       mailOptions = {
//       from: process.env.EMAIL_USER, // Your email
//       to: process.env.EMAIL_USER,
//       email, // Send to the user who filled the form (you can also specify a fixed recipient)
//       subject: "BrandPos Contact Form",
//       text: `
//       Username: ${username}
//       Phone: ${phone}
//       Email: ${email}
//       Message: ${messageBody}`,
//     };
//   } else {
//        mailOptions = {
//       from: process.env.EMAIL_USER, // Your email
//       to: process.env.EMAIL_USER,
//       email, // Send to the user who filled the form (you can also specify a fixed recipient)
//       subject: "BrandPos Order Form",
//       text: `
//       Username: ${username}
//       Phone: ${phone}`,
//     };
//   }

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     console.log(username, phone);
//     return NextResponse.json(
//       { message: "Email sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     // Check if error is an instance of Error
//     if (error instanceof Error) {
//       return NextResponse.json(
//         { error: "Failed to send email", details: error.message },
//         { status: 500 }
//       );
//     } else {
//       // Fallback for non-Error types
//       return NextResponse.json(
//         { error: "Failed to send email", details: String(error) },
//         { status: 500 }
//       );
//     }
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { username, phone, email, messageBody } = await req.json();
  let mailOptions = {};
  let confirmationEmailOptions = {};

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Email options for sending to yourself
  if (messageBody) {
    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: "BrandPos Contact Form",
      text: `
      Username: ${username}
      Phone: ${phone}
      Email: ${email}
      Message: ${messageBody}`,
    };
  } else {
    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: "BrandPos Order Form",
      text: `
      Username: ${username}
      Phone: ${phone}`,
    };
  }

  // Email options for sending a confirmation email to the customer
   confirmationEmailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Send confirmation to the user
    subject: "Confirmation of your submission",
    text: `Dear ${username},

      Thank you for getting in touch with BrandPos. We have received your details:
      
      Username: ${username}
      Phone: ${phone}
      
      Message: ${messageBody}
      We will get back to you shortly.

      Best regards,
      BrandPos Team`,
    };

  try {
    // Send the main email to yourself
    await transporter.sendMail(mailOptions);

    // Send the confirmation email to the customer
    await transporter.sendMail(confirmationEmailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send emails", details: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to send emails", details: String(error) },
        { status: 500 }
      );
    }
  }
}
