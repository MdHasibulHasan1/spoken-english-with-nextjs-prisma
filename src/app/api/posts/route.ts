import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      searchTerm = "",
      sort = "desc",
      category = "preposition",
      startIndex = 0,
    } = req.body;

    try {
      const posts = await prisma.chapter.findMany({
        where: {
          AND: [
            {
              OR: [
                {
                  title: {
                    contains: searchTerm as string,
                    mode: "insensitive",
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
            { category: { equals: category as string } },
          ],
        },
        orderBy: { createdAt: sort as "asc" | "desc" },
        skip: Number(startIndex),
        take: 9, // Change this to the desired page size
      });

      res.status(200).json({ posts });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
