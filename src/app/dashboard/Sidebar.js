import NavLink from "@/components/navbar/NavLink";

import { GoHome } from "react-icons/go";
const navData = [
  {
    path: "/dashboard",
    title: "Home",
  },
  {
    path: "/dashboard/manage-users",
    title: "Manage Users",
  },
  {
    path: "/dashboard/preposition/add",
    title: "Add Preposition",
  },
  {
    path: "/dashboard/preposition/mine",
    title: "My Prepositions",
  },
  {
    path: "/dashboard/conjunctions/add",
    title: "Add Conjunction",
  },
  {
    path: "/dashboard/conjunctions/mine",
    title: "My Conjunctions",
  },
];

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      {/* className={`${!isMenuOpen && "hidden"}`} */}
      <nav className="border-b border-gray-200 fixed z-30 w-full">
        <div className="flex items-center justify-start lg:hidden">
          <div className="absolute z-10 top-0 left-0 w-full">
            <div className="px-5 border rounded shadow-sm">
              <div className="flex items-center justify-between relative">
                <button
                  className="px-4 py-2 rounded-xl absolute transition top-0 right-0 duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  ) : (
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
              {isMenuOpen && (
                <nav>
                  <ul className="py-6 px-4  bg-gray-50 border border-gray-500 lg:hidden ">
                    {/* Navigation links */}
                    {navData.map(({ path, title }) => (
                      <li
                        key={path}
                        className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-lg py-3 rounded-lg shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
                      >
                        <NavLink
                          // onClick={() => setNavToggle(false)}
                          href={path}
                          activeClassName="text-blue-500"
                          exact={path === "/dashboard"}
                        >
                          {title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="flex overflow-hidden pt-16">
        <aside className="bg-slate-100 border border-slate-400 rounded-ee-lg rounded-tr-lg fixed hidden z-20 h-full top-0 left-0 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 divide-y space-y-1">
                <ul className="space-y-2 pb-2 ">
                  {navData.map(({ path, title }) => (
                    <li
                      key={path}
                      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-lg py-3 rounded-lg shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize "
                    >
                      <NavLink
                        // onClick={() => setNavToggle(false)}
                        className="pl-2"
                        href={path}
                        activeClassName="text-blue-500  border-l-2 border-blue-600"
                        exact={path === "/dashboard"}
                      >
                        {title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
