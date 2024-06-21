import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const search = url.searchParams.get("search") || "";
  const sort = url.searchParams.get("sort") || "name";
  const order = url.searchParams.get("order") || "asc";
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "10");

  const skip = (page - 1) * limit;
  const sortOrder = order === "asc" ? "asc" : "desc";

  const users = await prisma.user.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      [sort]: sortOrder,
    },
    skip,
    take: limit,
  });

  const totalUsers = await prisma.user.count({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ],
    },
  });

  const successResponse: ApiResponse = {
    success: true,
    message: "Users fetched successfully",
    payload: { users, totalUsers },
  };

  return NextResponse.json(successResponse, { status: 200 });
}
