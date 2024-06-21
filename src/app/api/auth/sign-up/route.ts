import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(req: NextRequest) {
  const { name, email, password, image } = await req.json();
  console.log(name, email, password, image);

  // Validation: Check if any of the required fields are empty
  if (!name || !email || !password) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "All fields (name, email, password) are required",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      const successResponse: ApiResponse = {
        success: true,
        message: "User with this email already exists",
        payload: {},
      };
      return NextResponse.json(successResponse, { status: 404 });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        image,
      },
    });
    console.log(newUser);
    // Success response
    const successResponse: ApiResponse = {
      success: true,
      message: "Your account created successfully",
      payload: newUser,
    };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    console.log("Error creating user:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "User creation failed",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
