import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function MySpokenRules() {
  const rules = await prisma.spokenRule.findMany({
    where: {
      bloggerEmail: "hasib7143@gmail.com", // Replace with the actual unique ID value
    },
  });
  return (
    <div className="container mx-auto p-4">
      {rules?.map((rule) => (
        <div key={rule.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex items-center mb-4">
            {rule.bloggerImage ? (
              <Image
                src={rule.bloggerImage}
                alt={rule.bloggerName || "blogger Image"}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
            )}
            <div>
              <h2 className="text-lg font-bold">
                {rule.bloggerName || "Anonymous"}
              </h2>
              <p className="text-sm text-gray-500">{rule.bloggerEmail}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Category: {rule.category}
          </h3>
          <p className="text-gray-700 mb-4">Description: {rule.description}</p>
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
