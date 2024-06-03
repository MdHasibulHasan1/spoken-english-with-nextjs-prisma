import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { conjunction, explanation, examples } = await req.json();
    const newConjunction = await prisma.conjunction.create({
      data: {
        conjunction,
        explanation,
        examples: examples.filter(
          (example) => !(example?.english === "" && example?.bangla === "")
        ),
      },
    });

    return NextResponse.json(newConjunction, { status: 200 });
  } catch (error) {
    console.error("Error creating conjunction:", error);
    return NextResponse.json(
      { error: "Failed to save conjunction" },
      { status: 500 }
    );
  }
}
