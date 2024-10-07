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

    // Ensure the user is authenticated and has a valid id
    if (!session || !user || !user.id) {
      return NextResponse.json(
        { success: false, message: "Not authenticated or missing user ID" },
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

    // Create the new conjunction in the database, userId is guaranteed to be a string
    const newConjunction = await prisma.conjunction.create({
      data: {
        conjunction,
        explanation,
        examples: filteredExamples,
        userId: user.id, // Remove the optional chaining here to ensure a valid string
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Conjunction created successfully",
      payload: newConjunction,
    };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error: any) {
    console.error("Error creating conjunction:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to save conjunction",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
