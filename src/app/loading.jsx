// components/Loading.js
import { FaSpinner } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-400px)] space-y-4">
      {/* <FaSpinner /> */}
      <ImSpinner9 className="animate-spin text-6xl text-gray-500" />
      <p className="text-lg text-gray-600 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
