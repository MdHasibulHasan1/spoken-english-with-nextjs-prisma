"use client";

import { afterLoginNavData, beforeLoginNavData } from "./navData";
// import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { startTransition, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import NavLink from "./NavLink";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
const Navbar = () => {
  const { data: session } = useSession();
  const user: User = session?.user;
  console.log(user);

  const navData = user ? afterLoginNavData : beforeLoginNavData;

  const { replace, refresh } = useRouter();
  const path = usePathname();
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState<boolean>(false);
  if (pathName.startsWith("/pre")) {
    return (
      <div>
        This is conditional dashboard. remove condition from navbar.
        <a className="text-red-600" href="/">
          Home
        </a>
      </div>
    );
  }
  return (
    <nav className="px-4 mx-auto font-semibold  sticky top-0 z-10 w-full uppercase text-lg py-6 bg-gray-50">
      <div className="">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl normal-case">
            EnglishElevate
          </Link>

          <ul className="lg:flex items-center gap-4 justify-between hidden ">
            {/* Navigation links */}

            {navData.map(({ path, title }) => (
              <li key={path} className="">
                <NavLink
                  // onClick={() => setNavToggle(false)}
                  href={path}
                  activeClassName="text-purple-500"
                  exact={path === "/"}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {user && (
              <div className="relative">
                <Image
                  onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                  className="w-12 h-12 rounded-full cursor-pointer"
                  src={user.image || "https://i.ibb.co/LYS7q2X/user.png"}
                  alt="User Avatar"
                  width={32} // Specify the width
                  height={32} // Specify the height
                />

                {isProfileMenuOpen && (
                  <ul className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/profile">Profile</Link>
                    </li>

                    <li className="px-4 py-2 hover:bg-gray-200">
                      <button onClick={() => signOut()}>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 lg:hidden -mr-1 top-0 right-0 transition duration-200 rounded focus:outline-none focus:shadow-outline "
            onClick={() => setIsMenuOpen(true)}
          >
            {!isMenuOpen && (
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="lg:hidden rounded-3xl">
          {isMenuOpen && (
            <div className="absolute top-0 bg-gray-100 border border-gray-500 w-full left-0  rounded-badge">
              <div className="p-5 bg-primary-500 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4 relative">
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 absolute transition top-0 right-0 duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {/* Navigation links */}
                    {navData.map(({ path, title }) => (
                      <li key={path} className="mx-auto">
                        <NavLink
                          // onClick={() => setNavToggle(false)}
                          href={path}
                          activeClassName="text-purple-500"
                          exact={path === "/"}
                        >
                          {title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
