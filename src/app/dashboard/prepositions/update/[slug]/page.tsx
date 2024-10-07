import { prisma } from "@/lib/db/prisma";
import React from "react";
// import PrepositionsForm from "../PrepositionsForm";

async function UpdatePreposition({ params }: { params: { slug: string } }) {
  const prepositionId = parseInt(params.slug, 10);

  if (isNaN(prepositionId)) {
    return <div>Invalid preposition ID</div>;
  }

  try {
    const preposition = await prisma.preposition.findUnique({
      where: {
        id: params.slug,
      },
    });

    if (!preposition) {
      return <div>preposition id not fount</div>;
    }

    return (
      <div className="w-full">
        {/* <PrepositionsForm key={preposition?.id} {...preposition} /> */}
      </div>
    );
  } catch (error) {
    console.log("Error", error);
    return <div>Error fetching preposition</div>;
  }
}

export default UpdatePreposition;
