"use client";
// import { handleSignIn } from "@/actions/user";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email, password });
  }; */
  const handleSignIn = async () => {
    await signIn("google");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(result);
    if (result?.error) {
      console.error(result.error);
    } else {
      toast.success("Sign in successful.");
      // Handle successful sign-in, e.g., redirect to a protected page
      router.replace("/");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg border-t-4 border-indigo-600">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <Link
              className="text-indigo-600 hover:text-indigo-500"
              href="/sign-up"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="inline-flex items-center justify-center w-full max-w-xs px-4 py-3 text-sm font-medium border-gray-300 border border-transparent rounded-md shadow-sm hover:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FcGoogle className="mr-2 h-6 w-6" />
              Sign in with Google
            </button>
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="inline-flex items-center justify-center w-full max-w-xs px-4 py-3 text-sm font-medium bg-gray-100 border border-transparent rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50"
            >
              <FaGithub className="mr-2 h-6 w-6" />
              Sign in with GitHub
            </button>
          </div>
          <p className="text-center mt-6 text-sm text-gray-600">
            <Link
              className="text-indigo-600 hover:text-indigo-500"
              href="/request-reset"
            >
              <>Forgot your password?</>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
