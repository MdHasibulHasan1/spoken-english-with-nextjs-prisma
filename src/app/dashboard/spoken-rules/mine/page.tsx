import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/lib/db/prisma";
import { User, getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function MySpokenRules() {
  const session = await getServerSession(authOptions);
  const user: User = session?.user;
  // console.log(user);
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
  const rules = await prisma.spokenRule.findMany({
    where: { userId: user.id },
    include: {
      author: true, // Including the related author (user) details, if needed
    },
    orderBy: {
      createdAt: "desc", // Use 'desc' if you want to sort in descending order
    },
  });
  // console.log(rules);
  return (
    <div className="container mx-auto p-4">
      <div>{rules.length}</div>
      {rules?.map((rule) => (
        <div key={rule.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex items-center mb-4">
            {/* {rule.bloggerImage ? (
              <Image
                src={rule.bloggerImage}
                alt={rule.bloggerName || "blogger Image"}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
            ) : ( */}
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
            {/* )} */}
            <div>
              <h2 className="text-lg font-bold">
                {/* {rule.bloggerName || "Anonymous"} */}
                Anonymous
              </h2>
              <p className="text-sm text-gray-500">{rule?.bloggerEmail}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {rule.serialNumber}Category: {rule.category}
          </h3>
          <p className="text-gray-700 mb-4">Note: {rule.note}</p>
          <p className="text-gray-700 mb-4">Structure: {rule.structure}</p>
          <p className="text-sm text-gray-500">Status: {rule.status}</p>
          <p className="text-sm text-gray-500">
            Created At: {new Date(rule.createdAt).toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            Updated At: {new Date(rule.updatedAt).toLocaleString()}
          </p>
          <Link href={`/dashboard/spoken-rules/update/${rule?.id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Update Data
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MySpokenRules;
