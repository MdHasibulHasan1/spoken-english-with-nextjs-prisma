"use server";
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";

export async function updateRule(ruleId: string, formData: any) {
  // Validate required fields
  if (
    !formData.structure ||
    !Array.isArray(formData.examples) ||
    !formData.category
  ) {
    const response: ApiResponse = {
      success: false,
      message: "Missing required fields (id, structure, examples, category).",
    };
    return response;
  }

  try {
    // Update rule with Prisma
    const updatedRule = await prisma.spokenRule.update({
      where: {
        id: ruleId,
      },
      data: formData,
    });

    const successResponse: ApiResponse = {
      success: true,
      message: "Rule updated successfully",
      payload: updatedRule,
    };
    return successResponse;
  } catch (error) {
    console.error(error);
    const errorResponse: ApiResponse = {
      success: false,
      message: `An error occurred while updating the rule: ${error}`,
    };
    return errorResponse;
  }
}
