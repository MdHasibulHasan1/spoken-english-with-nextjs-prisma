import { prisma } from "@/lib/db/prisma";
import React from "react";
import ConjunctionEditForm from "../ConjunctionEditForm";

async function UpdateConjunction({ params }: { params: { slug: string } }) {
  const conjunctionId = parseInt(params.slug, 10);

  if (isNaN(conjunctionId)) {
    return <div>Invalid conjunction ID</div>;
  }

  try {
    const conjunction = await prisma.conjunction.findUnique({
      where: {
        id: params.slug,
      },
    });

    if (!conjunction) {
      return <div>conjunction id not fount</div>;
    }

    return (
      <div>
        <ConjunctionEditForm {...conjunction} />
      </div>
    );
  } catch (error) {
    console.log("Error", error);
    return <div>Error fetching conjunction</div>;
  }
}

export default UpdateConjunction;
