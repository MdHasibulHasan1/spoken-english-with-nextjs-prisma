import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { id } = params;
  const { conjunction, explanation, examples } = body;

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

    const updateProduct = await prisma.conjunction.update({
      where: {
        id: id,
      },
      data: {
        conjunction,
        explanation,
        examples,
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Conjunction updated successfully",
      payload: updateProduct,
    };
    return NextResponse.json(successResponse);
  } catch (error) {
    console.log("Error updating product", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to update conjunction",
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
