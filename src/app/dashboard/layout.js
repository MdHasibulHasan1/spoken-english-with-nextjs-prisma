"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";
// export const metadata = {
//   title: "Dashboard | Next app",
//   description: "Next app",
// };

const DashboardLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={`pt-6 lg:pb-0 border-gray-800 border  relative overflow-y-auto ${
          !isMenuOpen ? "ml-0 lg:ml-64" : "ml-64"
        } px-4 w-full`}
      >
        {children}
        <Link href="/" className="mt-5 mb-2 inline-block">
          <button className="btn btn-primary bg-blue-500">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};
export default DashboardLayout;
