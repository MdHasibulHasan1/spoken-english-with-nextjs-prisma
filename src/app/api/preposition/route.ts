import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import { prepositionSchema } from "@/schemas/prepositionSchemas";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = prepositionSchema.safeParse(body);

    if (!validation.success) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "Validation error",
        payload: validation.error.errors,
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    const { expressions, title, usages } = validation.data;

    const newPreposition = await prisma.preposition.create({
      data: {
        expressions,
        title,
        usages,
        createdAt: new Date(),
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Preposition created successfully",
      payload: newPreposition,
    };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    console.error("Error creating preposition:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to save preposition",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/* import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ApiResponse } from "@/types/ApiResponse";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { expressions, title, usages } = await req.json();
    console.log(title, usages);
    const filteredUsages = usages.find(
      (u: any) =>
        u?.description === "" || u?.examples.some((e: any) => e === "")
    );

    // Validation: Check if any of the fields are empty
    // Validation: Check if any of the required fields are missing
    if (!title || filteredUsages) {
      const errorResponse: ApiResponse = {
        success: false,
        message:
          "Missing required fields (title, usages> description & examples)",
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }
    const newPreposition = await prisma.preposition.create({
      data: {
        expressions,
        title,
        usages,
        createdAt: new Date(),
      },
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Preposition created successfully",
      payload: newPreposition,
    };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    console.error("Error creating preposition:", error);
    const errorResponse: ApiResponse = {
      success: false,
      message: "Failed to save preposition",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
 */
