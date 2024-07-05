import { prisma } from "@/lib/db/prisma";
import React from "react";
import RuleEditForm from "../RuleEditForm";

async function UpdateRule({ params }: { params: { id: string } }) {
  const ruleId = parseInt(params.id, 10);

  if (isNaN(ruleId)) {
    return <div>Invalid rule ID</div>;
  }

  try {
    const rule = await prisma.spokenRule.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!rule) {
      return <div>rule id not found.</div>;
    }
    // console.log(rule);
    return (
      <div className="w-full">
        <RuleEditForm key={rule?.id} rule={rule} />
      </div>
    );
  } catch (error) {
    console.log("Error", error);
    return <div>Error fetching rule.</div>;
  }
}

export default UpdateRule;
