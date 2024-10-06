import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db/prisma";
import { User, getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function MyChapters() {
  const session = await getServerSession(authOptions);
  const user: User = session?.user;
  /* 
  const rules = await prisma.spokenRule.findMany({
    where: {
      // userId: _user.id, // Replace with the actual unique ID value
      userId: "666a352bdd8ffd13465d78c4",
    },
    orderBy: {
      createdAt: "desc", // Use 'desc' if you want to sort in descending order
    },
  }); */

  // Step 2: Fetch the spoken rules for the user
  const chapters = await prisma.chapter.findMany({
    where: { userId: user.id },
    include: {
      author: true, // Including the related author (user) details, if needed
    },
    orderBy: {
      createdAt: "desc", // Use 'desc' if you want to sort in descending order
    },
  });
  return (
    <div className="container mx-auto p-4">
      <SectionTitle title="My Posts" />
      {chapters.map((p) => (
        <div key={p.id} className="p-4 mb-4 bg-white shadow-md rounded-md">
          <p>
            <strong>Title:</strong> {p?.title}
          </p>
          <p>
            <strong>Category:</strong> {p?.category}
          </p>
          <p>
            <strong>Slug:</strong> {p?.slug}
          </p>
          <div>
            <strong>Content:</strong>

            <div
              className="p-3 max-w-2xl mx-auto w-full prose prose-lg post-content"
              dangerouslySetInnerHTML={{ __html: p?.content }}
            ></div>
          </div>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(p?.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(p?.updatedAt).toLocaleString()}
          </p>
          <Link href={`/dashboard/blogs/update/${p?.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Update Data
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MyChapters;
