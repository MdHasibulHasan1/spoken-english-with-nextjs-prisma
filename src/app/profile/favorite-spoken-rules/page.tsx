/* import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import React from "react";

async function FavoriteRules() {
  // Get the user session
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // Check if the user is authenticated
  if (!session || !user) {
    return Response.json(
      { success: false, message: "Not authenticated" },
      { status: 401 }
    );
  }
  const userId = user.id;
  try {
    // Fetch the spoken rules where the user's ID is in the favorites array
    const favoriteRules = await prisma.spokenRule.findMany({
      where: { favorites: { has: userId } },
    });

    if (!favoriteRules) {
      return <div>There is nothing favorite of yours.</div>;
    }

    return <div className="w-full"></div>;
  } catch (error) {
    console.log("Error", error);
    return <div>Error Fetching Favorite Spoken Rules.</div>;
  }
}

export default FavoriteRules;
 */
