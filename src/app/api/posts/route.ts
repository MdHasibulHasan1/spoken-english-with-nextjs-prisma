import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";

export async function POST(req: NextRequest) {
  try {
    const {
      searchTerm = "",
      sort = "desc",
      category = "preposition",
      startIndex = 0,
    } = await req.json();

    // Fetch posts with the specified filters
    const posts = await prisma.chapter.findMany({
      where: {
        AND: [
          {
            OR: [
              {
                title: {
                  contains: searchTerm as string,
                  mode: "insensitive", // Case-insensitive search
                },
              },
              {
                content: {
                  contains: searchTerm as string,
                  mode: "insensitive",
                },
              },
            ],
          },
          { category: { equals: category as string } }, // Filter by category
        ],
      },
      orderBy: { createdAt: sort as "asc" | "desc" }, // Sort by createdAt
      skip: Number(startIndex),
      take: 9, // Page size
    });

    // Success response
    const successResponse: ApiResponse = {
      success: true,
      message: "Posts fetched successfully",
      payload: { posts },
    };

    return NextResponse.json(successResponse, { status: 200 });
  } catch (error) {
    // Type-safe way to check if 'error' is an instance of 'Error'
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    // Handle internal server errors
    const errorResponse: ApiResponse = {
      success: false,
      message: "Internal Server Error",
      payload: { error: errorMessage },
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
