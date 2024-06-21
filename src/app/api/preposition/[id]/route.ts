import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // const { userId } = auth();
    const { id } = params;
    /* 
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    } */

    const preposition = await prisma.preposition.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(preposition);
  } catch (error) {
    console.log("ERROR DELETING Preposition: ", error);
    return NextResponse.json({
      error: "Error deleting preposition",
      status: 500,
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { id } = params;
  const { expressions, title, usages, serialNumber } = body;

  try {
    // Validation: Check if any of the required fields are missing
    if (!expressions || !title || !usages) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "Missing required fields (title, usages)",
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const updatePreposition = await prisma.preposition.update({
      where: {
        id: id,
      },
      data: {
        title,
        expressions,
        usages,
        serialNumber: parseInt(serialNumber, 10),
        updatedAt: new Date(),
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Preposition updated successfully",
      payload: updatePreposition,
    };
    return NextResponse.json(successResponse);
  } catch (error) {
    console.log("Error updating preposition", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to update preposition",
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
