import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const search = url.searchParams.get("search") || "";
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "10", 10);
  const sortField = url.searchParams.get("sortField") || "createdAt";
  const sortOrder =
    url.searchParams.get("sortOrder") === "asc" ? "asc" : "desc";

  const skip = (page - 1) * limit;

  try {
    const totalRecords = await prisma.spokenRule.count({
      where: {
        OR: [
          { category: { contains: search, mode: "insensitive" } },
          { note: { contains: search, mode: "insensitive" } },
          { status: { contains: search, mode: "insensitive" } },
          { structure: { contains: search, mode: "insensitive" } },
          { serialNumber: parseInt(search) || undefined },
        ],
      },
    });

    const rules = await prisma.spokenRule.findMany({
      where: {
        OR: [
          { category: { contains: search, mode: "insensitive" } },
          { note: { contains: search, mode: "insensitive" } },
          { status: { contains: search, mode: "insensitive" } },
          { serialNumber: parseInt(search) || undefined },
        ],
      },
      skip,
      take: limit,
      orderBy: { [sortField]: sortOrder },
    });

    return NextResponse.json({
      success: true,
      data: rules,
      totalRecords,
      totalPages: Math.ceil(totalRecords / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
