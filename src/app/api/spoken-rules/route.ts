import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ApiResponse } from "@/types/ApiResponse";
import { User } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { prisma } from "@/lib/db/prisma";

export async function GET(req: Request) {
  try {
    const rules = await prisma.spokenRule.findMany({
      where: {
        // category: "phrase",
        status: { not: "denied" }, // Add this condition to exclude 'denied' status
      },
      orderBy: {
        serialNumber: "asc",
      },
      select: {
        id: true,
        examples: true,
        category: true,
        note: true,
        structure: true,
        // explanation: true,
        serialNumber: true,

        // Add other fields you want to include
        // Do not include 'user' field here
      },
    });

    return NextResponse.json({});
  } catch (error: any) {
    console.error("ERROR GETTING SPOKEN RULES: ", error);
    return NextResponse.json(
      { error: "Error Getting Rules", status: 500 },
      { status: 500 } // Ensure proper status code in response
    );
  }
}
export async function POST(req: Request) {
  try {
    const { category, structure, note, examples, explanation } =
      await req.json();
    // console.log(category, structure, note, explanation, examples);
    const session = await getServerSession(authOptions);
    const _user: User = session?.user;

    // Return 401 if the session or user is not found
    if (!session || !_user) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Validation: Check if any of the required fields are missing
    if (!structure || !Array.isArray(examples) || !category) {
      const response: ApiResponse = {
        success: false,
        message: "Missing required fields (structure, examples, category).",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Filter out empty examples
    const filteredExamples = examples.filter(
      (example) => !(example?.english === "" && example?.bangla === "")
    );

    // Ensure userId is only passed when it’s a valid string
    const createdRule = await prisma.spokenRule.create({
      data: {
        structure,
        explanation,
        note,
        examples: filteredExamples,
        category,
        userId: _user?.id || "", // Ensure valid userId
      },
    });

    // Success response
    const successResponse: ApiResponse = {
      success: true,
      message: "Your rule has been added successfully.",
      payload: createdRule,
    };

    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    console.error("Error creating spoken rule:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to save spoken rule.",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
