import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SectionTitle from "@/components/SectionTitle";
import { prisma } from "@/lib/db/prisma";
import axios from "axios";
import { User, getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

async function MyPrepositions() {
  const session = await getServerSession(authOptions);
  const user: User = session?.user;

  // Step 2: Fetch the spoken rules for the user
  const prepositions = await prisma.preposition.findMany({
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
      <SectionTitle title="My Prepositions" />

      {prepositions.map((p) => (
        <div key={p.id} className="p-4 mb-4 bg-white shadow-md rounded-md">
          <p>
            <strong>Title:</strong> {p.title}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(p?.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(p?.updatedAt).toLocaleString()}
          </p>
          <Link href={`/dashboard/prepositions/update/${p?.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Update Data
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MyPrepositions;
