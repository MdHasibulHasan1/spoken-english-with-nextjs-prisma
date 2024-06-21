"use client";
import { useState } from "react";
import NavLink from "@/components/navbar/NavLink";
import { GoHome, GoPerson, GoPlus, GoListUnordered } from "react-icons/go";
import { MdDashboard } from "react-icons/md";

const navData = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/dashboard/manage-users",
    title: "Manage Users",
    icon: <GoPerson />,
  },
  {
    path: "/dashboard/preposition/add",
    title: "Add Preposition",
    icon: <GoPlus />,
  },
  {
    path: "/dashboard/preposition/mine",
    title: "My Prepositions",
    icon: <GoListUnordered />,
  },
  {
    path: "/dashboard/conjunctions/add",
    title: "Add Conjunction",
    icon: <GoPlus />,
  },
  {
    path: "/dashboard/conjunctions/mine",
    title: "My Conjunctions",
    icon: <GoListUnordered />,
  },
  {
    path: "/dashboard/chapter/add",
    title: "Add a Chapter",
    icon: <GoPlus />,
  },
  {
    path: "/dashboard/chapter/mine",
    title: "My Chapters",
    icon: <GoListUnordered />,
  },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Top Navigation for Mobile */}
      <nav className="bg-white shadow-md fixed w-full z-30 lg:hidden">
        <div className="flex items-center justify-between p-4">
          <div className="text-xl font-semibold">My Dashboard</div>
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="px-4 pb-4 lg:hidden">
            <ul className="space-y-2">
              {navData.map(({ path, title, icon }) => (
                <li
                  key={path}
                  className="text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <NavLink
                    href={path}
                    activeClassName="text-blue-500 font-bold"
                    exact={path === "/dashboard"}
                    className="flex items-center p-2 space-x-3"
                  >
                    {icon} <span>{title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Sidebar for Desktop */}
      <div
        className={`fixed inset-y-0 hidden  left-0 transform bg-white shadow-lg lg:shadow-none lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:w-64 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "" : "-translate-x-full lg:hidden"
        }`}
      >
        <div className="flex justify-between m-4 p-4 rounded-md items-center bg-gray-800 text-white text-xl font-semibold">
          <div className=" ">My Dashboard</div>
          {/* Toggle Button for Sidebar on Large Screens */}
          <button
            className="hidden lg:block z-40 p-2  bg-white rounded-full shadow-md focus:outline-none"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            {isSidebarVisible ? (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex-1  overflow-y-auto">
          <ul className="p-4 space-y-2">
            {navData.map(({ path, title, icon }) => (
              <li
                key={path}
                className="text-gray-700 hover:bg-gray-200 rounded-lg"
              >
                <NavLink
                  href={path}
                  activeClassName="text-blue-500 font-bold"
                  exact={path === "/dashboard"}
                  className="flex items-center p-2 space-x-3"
                >
                  {icon} <span>{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="flex-border border-red-500 p-6 overflow-auto">
        {/* Main content */}
      </main>
    </div>
  );
};

export default Sidebar;
