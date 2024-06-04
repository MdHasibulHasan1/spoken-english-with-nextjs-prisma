import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface ApiResponse {
  success: boolean;
  message: string;
  payload: object;
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, image, category } = await req.json();

    // Log incoming data for debugging
    console.log("Received data:", { title, content, image, category });

    // Validation: Check if any of the required fields are empty
    if (!title || !content || !image || !category) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "All fields (title, content, image, category) are required",
        payload: {},
      };
      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Create new chapter
    const newPost = await prisma.chapter.create({
      data: {
        title,
        content,
        image,
        category,
        // Ensure slug is URL friendly
        slug: title
          .split(" ")
          .join("-")
          .toLowerCase()
          .replace(/[^a-zA-Z0-9-]/g, ""),
      },
    });

    // Log the created post
    console.log("New post created:", newPost);

    // Success response
    const successResponse: ApiResponse = {
      success: true,
      message: "Chapter created successfully",
      payload: newPost,
    };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    // Log error details for debugging
    console.error("Error creating post:", error);

    // Error response
    const errorResponse: ApiResponse = {
      success: false,
      message: "Internal Server Error",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
