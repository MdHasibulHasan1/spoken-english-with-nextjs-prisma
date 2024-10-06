import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // const { userId } = auth();
    const { id } = params;
    /* 
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    } */

    const chapter = await prisma.chapter.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // const { userId } = auth();
    const { id } = params;
    /* 
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    } */

    const chapter = await prisma.chapter.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("ERROR GETTING BLOG: ", error);
    return NextResponse.json({ error: "Error Getting Blog", status: 500 });
  }
}
