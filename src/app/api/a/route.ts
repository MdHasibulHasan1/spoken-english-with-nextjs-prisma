import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const rules = await prisma.spokenRule.findMany({
    where: {
      // userId: _user.id, // Replace with the actual unique ID value
      userId: "666a352bdd8ffd13465d78c4",
    },
    orderBy: {
      createdAt: "desc", // Use 'desc' if you want to sort in descending order
    },
  });

  const successResponse: ApiResponse = {
    success: true,
    message: "Users fetched successfully",
    payload: { rules },
  };

  return NextResponse.json(successResponse, { status: 200 });
}

export async function PUT(req: NextRequest) {
  try {
    // const { newUserId } = await req.json();
    const newUserId = "666a352bdd8ffd13465d78c4";
    if (!newUserId) {
      return NextResponse.json(
        {
          success: false,
          message: "newUserId is required",
        },
        { status: 400 }
      );
    }

    const updateResult = await prisma.preposition.updateMany({
      data: {
        userId: newUserId,
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: `${updateResult.count} spoken rules updated successfully`,
      payload: { updateResult },
    };

    return NextResponse.json(successResponse, { status: 200 });
  } catch (error) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "An error occurred while updating spoken rules",
      payload: { error: error.message },
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
