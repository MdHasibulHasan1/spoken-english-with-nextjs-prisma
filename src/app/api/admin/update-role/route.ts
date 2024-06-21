import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { id, role } = await req.json();
  console.log(id, role);

  // Validation: Check if any of the required fields are empty
  if (!id || !role) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "User ID and role are required.",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role },
    });
    const successResponse: ApiResponse = {
      success: true,
      message: "User role updated successfully.",
      payload: { updatedUser },
    };
    return NextResponse.json(successResponse, { status: 200 });
  } catch (error) {
    console.error(error);

    const errorResponse: ApiResponse = {
      success: false,
      message: "Internal server error.",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
