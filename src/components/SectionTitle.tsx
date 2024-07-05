import React from "react";

// Define the type for the props
interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h1 className="text-5xl font-extrabold mb-8 text-center text-purple-800 tracking-wide relative py-2">
      <span className="block mb-2">{title}</span>
      <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></span>
    </h1>
  );
};

export default SectionTitle;
