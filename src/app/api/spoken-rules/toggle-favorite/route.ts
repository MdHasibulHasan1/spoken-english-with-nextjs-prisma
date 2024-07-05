// app/api/spoken-rules/toggle-favorite/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";

export async function PUT(req: NextRequest) {
  const { id, userId } = await req.json();
  console.log(id, userId);

  // Validation: Check if the required fields are provided
  if (!id || !userId) {
    const errorResponse: ApiResponse = {
      success: false,
      message: "SpokenRule ID and user ID are required.",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 400 });
  }

  try {
    // Fetch the current favorites of the spoken rule
    const spokenRule = await prisma.spokenRule.findUnique({
      where: { id },
      select: { favorites: true },
    });

    if (!spokenRule) {
      const errorResponse: ApiResponse = {
        success: false,
        message: "SpokenRule not found.",
        payload: {},
      };
      return NextResponse.json(errorResponse, { status: 404 });
    }

    let updatedFavorites;
    let message;

    if (spokenRule.favorites.includes(userId)) {
      // Remove from favorites if already in the list
      updatedFavorites = spokenRule.favorites.filter(
        (fav: string) => fav !== userId
      );
      message = "Removed from favorites.";
    } else {
      // Add to favorites if not in the list
      updatedFavorites = [...spokenRule.favorites, userId];
      message = "Added to favorites.";
    }

    // Update the spoken rule with the new favorites list
    const updatedSpokenRule = await prisma.spokenRule.update({
      where: { id },
      data: { favorites: updatedFavorites },
    });

    const successResponse: ApiResponse = {
      success: true,
      message,
      payload: { updatedSpokenRule },
    };
    return NextResponse.json(successResponse, { status: 200 });
  } catch (error) {
    console.error(error);

    const errorResponse: ApiResponse = {
      success: false,
      message: "Internal server error.",
      payload: {},
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
