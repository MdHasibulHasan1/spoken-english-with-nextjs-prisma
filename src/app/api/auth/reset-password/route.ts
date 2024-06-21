import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
export async function POST(req: NextRequest, res: NextResponse) {
  const { token, newPassword } = await req.json();

  // Validation: Check if any of the required fields are empty
  if (!token || !newPassword) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "All fields (token, new password) are required",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpiry: { gt: new Date() },
    },
  });

  if (!user) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "Invalid or expired token",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  const hashedPassword = bcrypt.hashSync(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      emailVerified: new Date(),
      resetToken: null,
      resetTokenExpiry: null,
    },
  });
  const successResponse: ApiResponse = {
    success: true,
    message: "Password has been reset",
    payload: {},
  };
  return NextResponse.json(successResponse, { status: 200 });
}
