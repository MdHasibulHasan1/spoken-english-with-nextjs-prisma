import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function MyConjunctions() {
  const conjunctions = await prisma.conjunction.findMany({
    where: {
      bloggerEmail: "hasib7143@gmail.com", // Replace with the actual unique ID value
    },
  });
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Display</h1>
      {conjunctions.map((conjunction) => (
        <div
          key={conjunction.id}
          className="p-4 mb-4 bg-white shadow-md rounded-md"
        >
          <p>
            <strong>Conjunction:</strong> {conjunction.conjunction}
          </p>
          <p>
            <strong>Explanation:</strong> {conjunction.explanation}
          </p>
          <p>
            <strong>Blogger Email:</strong> {conjunction.bloggerEmail}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(conjunction.updatedAt).toLocaleString()}
          </p>
          <Link href={`/dashboard/conjunctions/update/${conjunction?.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Update Data
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MyConjunctions;
