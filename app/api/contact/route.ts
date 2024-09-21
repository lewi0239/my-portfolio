// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const { fullName, email, phone, contactMethod, subject, message } = req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Sender (your Gmail)
      pass: process.env.GMAIL_PASS, // App-specific password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender's email (your Gmail account)
      to: process.env.CONTACT_EMAIL, // Recipient (same Gmail account)
      subject: `New message from ${fullName}`, // Email subject
      text: message, // Plain text body
      html: `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML email body
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
