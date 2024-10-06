"use server";
import { prisma } from "@/lib/db/prisma";
import { ApiResponse } from "@/types/ApiResponse";
import { Rule } from "@/types/types";

export async function addRule(formData: Rule) {
  // const session = await getServerSession(authOptions);

  /*  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
 */
  const { category, structure, note, examples, userId } = formData;
  console.log(category, structure, note, examples);
  if (!structure || !Array.isArray(examples) || !category) {
    const response: ApiResponse = {
      success: false,
      message: "Missing required fields(structure, examples, category).",
    };
    return response;
  }

  try {
    const createdRule = await prisma.spokenRule.create({
      data: { structure, note, examples, category, userId },
    });
    const successResponse: ApiResponse = {
      success: true,
      message: "Your rule is added successfully",
      payload: createdRule,
    };
    return successResponse;
  } catch (error) {
    console.log(error);
  }

  // redirect("/");
}
