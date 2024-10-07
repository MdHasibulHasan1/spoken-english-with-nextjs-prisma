"use server";

import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(email, password);
  try {
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
    console.log(result);

    if (result?.error) {
      throw new Error(result.error);
    }

    redirect("/");
  } catch (error) {
    return { error: error };
  }
};

export async function handleSignIn() {
  await signIn("google");
}
