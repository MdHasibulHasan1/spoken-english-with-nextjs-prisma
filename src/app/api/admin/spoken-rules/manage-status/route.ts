// app/api/approveStatus/route.ts
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { id, status } = await req.json();
  console.log(id, status);

  // Validation: Check if any of the required fields are empty or invalid status
  if (!id || !["Pending", "Approved", "Denied"].includes(status)) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "SpokenRule ID and valid status are required.",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  try {
    const updatedSpokenRule = await prisma.spokenRule.update({
      where: { id },
      data: { status },
    });
    const successResponse: ApiResponse = {
      success: true,
      message: "SpokenRule status updated successfully.",
      payload: { updatedSpokenRule },
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
