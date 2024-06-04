import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function MyChapters() {
  const chapters = await prisma.chapter.findMany({
    where: {
      bloggerEmail: "hasib7143@gmail.com", // Replace with the actual unique ID value
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
          <p>
            <strong>Content:</strong>

            <div
              className="p-3 max-w-2xl mx-auto w-full prose prose-lg post-content"
              dangerouslySetInnerHTML={{ __html: p?.content }}
            ></div>
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(p?.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(p?.updatedAt).toLocaleString()}
          </p>
          <Link href={`/dashboard/preposition/update/${p?.id}`}>
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
