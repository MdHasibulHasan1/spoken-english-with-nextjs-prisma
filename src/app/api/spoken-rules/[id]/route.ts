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

    const rule = await prisma.spokenRule.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(rule);
  } catch (error) {
    console.log("ERROR DELETING rule: ", error);
    return NextResponse.json({
      error: "Error deleting rule",
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
  const { examples, structure, category, serialNumber, note, explanation } =
    body;

  try {
    // Validation: Check if any of the required fields are missing
    if (!Array.isArray(examples) || !structure || !category) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "Missing required fields (examples, structure, category)",
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const updateRule = await prisma.spokenRule.update({
      where: {
        id: id,
      },
      data: {
        examples,
        structure,
        category,
        explanation,
        note,
        serialNumber: parseInt(serialNumber, 10),
        updatedAt: new Date(),
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Rule updated successfully",
      payload: updateRule,
    };
    return NextResponse.json(successResponse);
  } catch (error) {
    console.log("Error updating rule.", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to update rule.",
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
