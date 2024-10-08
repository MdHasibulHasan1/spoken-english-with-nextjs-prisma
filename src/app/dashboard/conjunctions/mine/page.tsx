import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db/prisma";
import { User, getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function MyConjunctions() {
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
  const conjunctions = await prisma.conjunction.findMany({
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
      <SectionTitle title="My Conjunctions" />

      {conjunctions.map((conjunction) => (
        <div
          key={conjunction.id}
          className="p-4 mb-4 bg-white shadow-md rounded-md"
        >
          <p className="text-lg font-semibold">
            <strong>Conjunction:</strong> {conjunction.conjunction}
          </p>
          <p className="mt-2">
            <strong>Explanation:</strong> {conjunction.explanation}
          </p>

          <p className="mt-2">
            <strong>Created At:</strong>{" "}
            {conjunction?.createdAt
              ? new Date(conjunction.createdAt).toLocaleString()
              : "N/A"}
          </p>

          <p className="mt-2">
            <strong>Updated At:</strong>{" "}
            {new Date(conjunction.updatedAt).toLocaleString()}
          </p>
          <Link href={`/dashboard/conjunctions/update/${conjunction?.id}`}>
            <button className="mt-4 inline-block px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out">
              Update Data
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MyConjunctions;
