import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ApiResponse } from "@/types/ApiResponse";
import { User, getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { conjunction, explanation, examples } = await req.json();
    const session = await getServerSession(authOptions);
    const user: User = session?.user;
    if (!session || !user) {
      return Response.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }
    // Validation: Check if any of the fields are empty
    if (
      !conjunction ||
      !explanation ||
      !Array.isArray(examples) ||
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
        userId: user?.id,
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
