import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ApiResponse } from "@/types/ApiResponse";
import { User } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { category, structure, note, examples } = await req.json();
    console.log(category, structure, note, examples);
    const session = await getServerSession(authOptions);
    const _user: User = session?.user;
    if (!session || !_user) {
      return Response.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }
    // Validation: Check if any of the fields are empty
    if (!structure || !Array.isArray(examples) || !category) {
      const response: ApiResponse = {
        success: false,
        message: "Missing required fields(structure, examples, category).",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const filteredExamples = examples.filter(
      (example) => !(example?.english === "" && example?.bangla === "")
    );
    const createdRule = await prisma.spokenRule.create({
      data: {
        structure,
        note,
        examples: filteredExamples,
        category,
        userId: _user.id,
      },
    });
    const successResponse: ApiResponse = {
      success: true,
      message: "Your rule is added successfully",
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
