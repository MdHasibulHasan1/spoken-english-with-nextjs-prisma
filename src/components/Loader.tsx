import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="loader flex items-center">
        {/* <FaSpinner className="animate-spin text-blue-500 text-4xl" /> */}
        <CgSpinnerTwoAlt size={45} className="animate-spin text-purple-700 " />
        {/* <span className="ml-2 text-2xl font-bold"></span> */}
      </div>
    </div>
  );
};

export default Loader;
