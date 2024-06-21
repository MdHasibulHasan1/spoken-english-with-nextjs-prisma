import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    name?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string;
    role?: string;
  }
}
