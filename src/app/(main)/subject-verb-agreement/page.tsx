import React from "react";
import data from "./data";

const Conjunctions = () => {
  return (
    <div className="md:w-11/12 lg:w-8/12 mx-auto p-4 md:p-6 md:text-xl">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-purple-800 tracking-wide relative py-2">
        <span className="block mb-2">
          Subject, verb, Agreement এর গুরুত্বপূর্ণ Rules-
        </span>
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></span>
      </h1>

      {data.map((item, index) => (
        <div
          key={index}
          className="mb-8 p-6 bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200"
        >
          <div className="mb-2">
            <div className="relative flex w-full items-center justify-center rounded-lg mx-auto bg-yellow-400">
              <div className="flex text-justify  px-4 py-2 bg-white w-11/12 rounded-lg justify-center font-bold items-center cursor-not-allowed text-purple-800">
                {item?.description}
              </div>
            </div>
          </div>
          <div>{item?.note}</div>
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
