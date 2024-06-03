// components/Loading.js
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
    </div>
  );
};

export default Loading;
