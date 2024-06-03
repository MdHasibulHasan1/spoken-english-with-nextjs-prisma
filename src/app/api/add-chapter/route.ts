import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { title, content, image, category } = await req.json();

    // Log incoming data for debugging
    console.log("Received data:", { title, content, image, category });

    // Create new chapter
    const newPost = await prisma.chapter.create({
      data: {
        title,
        content,
        image,
        category,
        slug: title.replace(/\s+/g, "-").toLowerCase(), // Ensure slug is URL friendly
      },
    });

    // Log the created post
    console.log("New post created:", newPost);

    // Return success response
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    // Log error details for debugging
    console.error("Error creating post:", error);

    // Return error response
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
