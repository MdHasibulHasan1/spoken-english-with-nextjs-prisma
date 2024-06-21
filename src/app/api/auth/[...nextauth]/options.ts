import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db/prisma";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { profile } from "console";
import { GoogleProfile } from "next-auth/providers/google";
import { GithubProfile } from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        // From this authorize function you must have  to return user object after verifying user using database. The user object will be saved in `user` property of the JWT
        if (!credentials.email || !credentials.password) {
          throw new Error(
            "Missing credentials: Please provide both email & password"
          );
        }
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            throw new Error("No user found with this email");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          // const isPasswordCorrect = credentials.password == user.password;

          console.log(credentials.password);
          console.log(user.password);
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (err: any) {
          throw new Error(err.message || "Authentication failed");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile: GoogleProfile) {
        return {
          ...profile,
          id: profile.id.toString(),
          image: profile.avatar_url,
          role: profile.role ?? "USER",
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      profile(profile: GithubProfile) {
        return {
          ...profile,
          id: profile.id.toString(),
          image: profile.avatar_url,
          role: profile.role ?? "USER",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // From jwt function you must have to return token
      if (user) {
        // Create field inside the token: set user information to token
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
        console.log("insede jwt", token);
      }
      return token;
    },
    async session({ session, token }) {
      // From session function you must have to return session: set user information from token to session.user
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  // adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/sign-in",
  },
};
