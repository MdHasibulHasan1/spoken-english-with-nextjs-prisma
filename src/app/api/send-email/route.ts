import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/types/ApiResponse";

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, message }: EmailRequestBody = await req.json();
    console.log("name", name, "email", email, "message", message);
    // Validate input
    if (!name || !email || !message) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "Missing required fields (name, email, message)",
      };
      console.log("Missing required fields ()");
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
      <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px;">
        <div style="background-color: #3b82f6; padding: 10px 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2 style="color: white; margin: 0;">New Message from ${name}</h2>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #374151; margin-top: 20px;">Hello,</p>
          <p style="font-size: 16px; color: #374151;">You have received a new message:</p>
          <p style="font-size: 16px; color: #374151; background-color: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e5e7eb; margin-top: 10px;">${message}</p>
          <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">Sender's email: <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to ${name}</a>
          </div>
        </div>
        <div style="text-align: center; margin-top: 20px; padding: 10px 0; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #9ca3af;">This email was sent from your website contact form.</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: email,
      to: "hasibul200000@gmail.com", // Replace with your receiving email address
      subject: `Message from ${name}`,
      text: message,
      html: emailContent,
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Email sent successfully",
    };
    return NextResponse.json(successResponse, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
