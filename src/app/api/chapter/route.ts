import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ApiResponse } from "@/types/ApiResponse";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { User } from "next-auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { title, content, image, category } = await req.json();
    const session = await getServerSession(authOptions);
    const user: User | null = session?.user || null;

    if (!session || !user || !user.id) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

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
        userId: user.id,
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
