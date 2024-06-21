import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email } = await req.json();

  // Validation: Check if any of the required fields are empty
  if (!email) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "Email are required",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    // Validation: Check if any of the required fields are empty

    const errorResponse: ApiResponse = {
      success: false,
      message: "User not found",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  const token = uuidv4();
  const expiresAt = new Date(Date.now() + 3600000); // 1 hour

  await prisma.user.update({
    where: { email },
    data: { resetToken: token, resetTokenExpiry: expiresAt },
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    text: `You requested a password reset. Please use the following link to reset your password: http://localhost:3000/reset-password?token=${token}`,
  };

  await transporter.sendMail(mailOptions);

  const successResponse: ApiResponse = {
    success: true,
    message:
      "A password reset link has been sent to your email. Please check your inbox to proceed with resetting your password.",
    payload: {},
  };
  return NextResponse.json(successResponse, { status: 200 });
}
