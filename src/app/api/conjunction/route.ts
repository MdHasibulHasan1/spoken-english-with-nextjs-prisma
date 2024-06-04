import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ApiResponse } from "@/types/ApiResponse";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { conjunction, explanation, examples } = await req.json();
    const emptyExamples = examples.filter(
      (example: any) => example?.english === "" && example?.bangla === ""
    );
    // Validation: Check if any of the fields are empty
    if (
      !conjunction ||
      !explanation ||
      !Array.isArray(examples) ||
      emptyExamples ||
      examples.length === 0
    ) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "All fields (conjunction, explanation, examples) are required",
        payload: {},
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const filteredExamples = examples.filter(
      (example) => !(example?.english === "" && example?.bangla === "")
    );

    const newConjunction = await prisma.conjunction.create({
      data: {
        conjunction,
        explanation,
        examples: filteredExamples,
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Conjunction created successfully",
      payload: newConjunction,
    };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    console.error("Error creating conjunction:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to save conjunction",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
