import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { expressions, title, usages } = await req.json();

    const newPreposition = await prisma.prepositions.create({
      data: {
        expressions,
        title,
        usages,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(newPreposition, { status: 200 });
  } catch (error) {
    console.error("Error creating preposition:", error);
    return NextResponse.json(
      { error: "Failed to save preposition" },
      { status: 500 }
    );
  }
}
