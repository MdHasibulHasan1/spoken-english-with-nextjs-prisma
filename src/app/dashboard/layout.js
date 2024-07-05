"use client";
import { useState } from "react";
import NavLink from "@/components/navbar/NavLink";
import { GoPerson, GoPlus, GoListUnordered } from "react-icons/go";
import { SiAwssecretsmanager } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Sidebar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [openCategory, setOpenCategory] = useState(null);
  const { data: session } = useSession();

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const navData = [
    {
      category: "Dashboard",
      items: [
        {
          id: 1,
          path: "/dashboard",
          title: "Dashboard",
          icon: <MdDashboard />,
        },
      ],
    },
    {
      category: "Admin",
      items: [
        {
          id: 2,
          path: "/dashboard/admin/manage-users",
          title: "Manage Users",
          icon: <GoPerson />,
        },
        {
          id: 3,
          path: "/dashboard/admin/spoken-rules/manage",
          title: "Manage Rules",
          icon: <SiAwssecretsmanager />,
        },
      ],
    },
    {
      category: "Prepositions",
      items: [
        {
          id: 4,
          path: "/dashboard/prepositions/add",
          title: "Add Preposition",
          icon: <GoPlus />,
        },
        {
          id: 5,
          path: "/dashboard/prepositions/mine",
          title: "My Prepositions",
          icon: <GoListUnordered />,
        },
      ],
    },
    {
      category: "Conjunctions",
      items: [
        {
          id: 6,
          path: "/dashboard/conjunctions/add",
          title: "Add Conjunction",
          icon: <GoPlus />,
        },
        {
          id: 7,
          path: "/dashboard/conjunctions/mine",
          title: "My Conjunctions",
          icon: <GoListUnordered />,
        },
      ],
    },
    {
      category: "Blogs",
      items: [
        {
          id: 8,
          path: "/dashboard/blogs/add",
          title: "Add a Blog",
          icon: <GoPlus />,
        },
        {
          id: 9,
          path: "/dashboard/blogs/mine",
          title: "My Blogs",
          icon: <GoListUnordered />,
        },
      ],
    },
    {
      category: "Spoken Rules",
      items: [
        {
          id: 10,
          path: "/dashboard/spoken-rules/add",
          title: "Add A Rule",
          icon: <GoPlus />,
        },
        {
          id: 11,
          path: "/dashboard/spoken-rules/seed-route",
          title: "Seed rule",
          icon: <GoPlus />,
        },
        {
          id: 12,
          path: "/dashboard/spoken-rules/mine",
          title: "My Spoken Rules",
          icon: <GoListUnordered />,
        },
      ],
    },
  ];

  return (
    <div className="flex bg-gray-100">
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
          <>
            {/* <div className="px-4 pb-4 lg:hidden">
            <ul className="space-y-2">
              {navData.map(({ path, title, icon }) => (
                <li
                  key={path}
                  className="text-gray-700 hover:bg-gray-200 rounded-lg"
                >
                  <NavLink
                    href={path}
                    activeClassName="bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                    exact={path === "/dashboard"}
                    className="flex items-center p-2 space-x-3"
                  >
                    {icon} <span>{title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div> */}
            <ul className="p-4 space-y-2">
              {navData.map((category) => (
                <li key={category.category} className="mb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200"
                    onClick={() => handleCategoryClick(category.category)}
                  >
                    <span className="font-semibold">{category.category}</span>
                    <svg
                      className={`w-4 h-4 transform ${
                        openCategory === category.category ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </div>
                  {openCategory === category.category && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {category.items.map(({ id, path, title, icon }) => (
                        <li
                          key={id}
                          className="text-gray-700 hover:bg-gray-200 rounded-lg"
                        >
                          <NavLink
                            href={path}
                            activeClassName="bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                            exact={path === "/dashboard"}
                            className="flex items-center p-2 space-x-3"
                          >
                            {icon} <span>{title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </nav>{" "}
      {/* Sidebar for Desktop */}
      {!isSidebarVisible && (
        <button
          className="hidden absolute top-0 left-0 lg:block z-40 p-2 bg-white rounded-full shadow-md focus:outline-none"
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        >
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
        </button>
      )}
      <div
        className={`relative inset-y-0 hidden px-2 left-0 transform bg-white shadow-lg lg:shadow-none lg:relative lg:translate-x-0 lg:flex lg:flex-col lg:w-72 transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "" : "-translate-x-full lg:hidden"
        }`}
      >
        <div className="flex-1 relative">
          <div className="flex items-center text-gray-800 justify-between p-4">
            <button
              className="text-gray-100 hover:text-gray-100 focus:outline-none focus:text-gray-100"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              {isSidebarVisible ? (
                <svg
                  className="w-6 h-6 text-gray-800"
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
          <ul className="p-4 space-y-2">
            {navData.map((category) => (
              <li key={category.category} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => handleCategoryClick(category.category)}
                >
                  <span className="font-semibold">{category.category}</span>
                  <svg
                    className={`w-4 h-4 transform ${
                      openCategory === category.category ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </div>
                {openCategory === category.category && (
                  <ul className="mt-2 space-y-2 pl-4">
                    {category.items.map(({ id, path, title, icon }) => (
                      <li
                        key={id}
                        className="text-gray-700 hover:bg-gray-200 rounded-lg"
                      >
                        <NavLink
                          href={path}
                          activeClassName="bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                          exact={path === "/dashboard"}
                          className="flex items-center p-2 space-x-3"
                        >
                          {icon} <span>{title}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className="border border-red-500 p-6 w-full pt-20 ">
        <Link href="/" className="flex gap-1 items-center">
          <span>
            <FaRegArrowAltCircleLeft />
          </span>
          <p className="cursor-pointer">Back to home</p>
        </Link>
        {/* Main content */}
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
