import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { id } = params;
  const { conjunction, explanation, examples, serialNumber } = body;

  try {
    // Validation: Check if any of the required fields are missing
    if (
      !conjunction ||
      !explanation ||
      !Array.isArray(examples) ||
      examples.length === 0
    ) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "Missing required fields (conjunction, explanation, examples)",
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const updatedConjunction = await prisma.conjunction.update({
      where: {
        id: id,
      },
      data: {
        conjunction,
        explanation,
        examples,
        serialNumber: parseInt(serialNumber, 10),
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Conjunction updated successfully",
      payload: updatedConjunction,
    };
    return NextResponse.json(successResponse);
  } catch (error) {
    console.log("Error updating conjunction:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to update conjunction",
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

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

    const conjunction = await prisma.conjunction.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(conjunction);
  } catch (error) {
    console.log("ERROR DELETING conjunction: ", error);
    return NextResponse.json({
      error: "Error deleting conjunction",
      status: 500,
    });
  }
}
