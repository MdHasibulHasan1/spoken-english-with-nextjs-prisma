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
  const { category, structure, description, examples } = formData;
  console.log(category, structure, description, examples);
  if (!structure || !Array.isArray(examples) || !category) {
    const response: ApiResponse = {
      success: false,
      message: "Missing required fields(structure, examples, category).",
    };
    return response;
  }

  try {
    const createdRule = await prisma.spokenRule.create({
      data: { structure, description, examples, category },
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
