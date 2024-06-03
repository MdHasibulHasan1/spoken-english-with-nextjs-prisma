import React from "react";
import conjunctionsData from "./conjunctionsData";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const Conjunctions = () => {
  return (
    <div className="md:w-11/12 lg:w-8/12 mx-auto p-4 md:p-6 md:text-xl">
      <SectionTitle title="Conjunctions & Linkers" />

      <Link href="/conjunctions2" className="mt-5 mb-2 inline-block">
        <button className="btn btn-primary bg-blue-500">Back to db</button>
      </Link>
      {conjunctionsData.map((item, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200"
        >
          <div className="mb-2">
            <div className="relative flex w-full items-center justify-center rounded-lg mx-auto bg-yellow-400">
              <div className="flex text-center px-4 py-2 bg-white w-11/12 rounded-lg justify-center font-bold items-center cursor-not-allowed text-purple-800">
                {item.conjunction} ({item.explanation})
              </div>
            </div>
          </div>
          <ul className="space-y-4">
            {item.examples.map((example, idx) => (
              <li
                key={idx}
                className="border-b pb-4 last:border-b-0 transition-transform transform hover:scale-105"
              >
                <p className="text-gray-800 mb-2">
                  <strong className="text-gray-900">English:</strong>{" "}
                  {example.english}
                </p>
                <p className="text-gray-800">
                  <strong className="text-gray-900">Bangla:</strong>{" "}
                  {example.bangla}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Conjunctions;
