/* import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/sign-up", "/"],
};

export async function middleware(request: NextRequest) {
  // const token = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });
  const token = await getToken({ req: request });

  const url = request.nextUrl;
  console.log("token", token);

  // Debugging token retrieval
  if (!token) {
    console.error("No token found in the request.");
  }

  // Redirect to dashboard if the user is already authenticated
  // and trying to access sign-in, sign-up, or home page
  if (
    token &&
    (url.pathname.startsWith("/sign-in") ||
      url.pathname.startsWith("/sign-up") ||
      url.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}
 */

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // This line extracts the pathname from the request URL.
  const { pathname } = req.nextUrl;
  console.log("pathname", pathname);
  console.log("req.url", req.url);
  // pathname = /dashboard/:path*
  // req.url = http://localhost:3000/dashboard/:path*
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // return NextResponse.redirect(...):

      // This indicates that the middleware should return a response that redirects the user to a different URL.
      // NextResponse.redirect is a method provided by Next.js to create a redirect response.
      // new URL("/auth/sign-in", req.url):

      // new URL(...) is used to create a new URL object.
      // "/auth/sign-in" is the path to the sign-in page. This is where users will be redirected if they are not authenticated.
      // req.url is the current request URL. The new URL constructor uses this as the base URL to resolve the relative path "/auth/sign-in".
      // By providing req.url as the base, the middleware ensures that the redirect URL is correctly formed based on the current request's URL context.
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  }

  return NextResponse.next();
}
// CONFIGURATION:
// This configuration specifies that the middleware should be applied to any routes under /dashboard. The :path* part means it will match any sub-paths of /dashboard.
export const config = {
  matcher: "/dashboard/:path*",
};
