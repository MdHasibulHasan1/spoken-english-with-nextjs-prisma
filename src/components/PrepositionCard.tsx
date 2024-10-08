import React from "react";

interface Usage {
  description: string;
  examples: string[];
}

interface Preposition {
  title: string;
  usages?: Usage[]; // Marked usages as optional
  expressions?: string[];
}

interface PrepositionCardProps {
  preposition: Preposition;
}

const PrepositionCard: React.FC<PrepositionCardProps> = ({ preposition }) => {
  let content;
  if (preposition?.expressions) {
    if (preposition?.expressions.length > 1) {
      content = (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-yellow-400">
                <th className="border border-gray-900 px-4 py-2 text-center">
                  {preposition?.title?.split(" ")[0]} দ্বারা গঠিত জরুরী Speaking
                  Preposition
                </th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-2">
              {preposition?.expressions?.map((expression, index) => (
                <tr
                  key={index}
                  className="bg-white grid grid-cols-1 w-full even:bg-gray-50"
                >
                  <td className="border border-gray-900 w-full px-4 py-2">
                    {expression}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  return (
    <div className="mb-8 p-6 bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200">
      <div className="mb-4">
        <div className="relative flex w-full items-center justify-center rounded-lg mx-auto bg-yellow-400">
          <div className="flex text-center px-4 py-2 bg-white w-11/12 rounded-lg justify-center font-bold items-center text-purple-800">
            {preposition?.title}
          </div>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Usage
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Examples
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {preposition?.usages?.map((usage, idx) => (
            <tr
              key={idx}
              className="transition-transform transform hover:scale-105 border-2 border-gray-100 rounded-lg my-2"
            >
              <td className="px-4 whitespace-nowrap">
                <p className="text-gray-800 mb-2">{usage?.description}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ul className="list-decimal pl-5">
                  {usage?.examples?.map((example, exIdx) => (
                    <li
                      key={exIdx}
                      className="text-gray-800 border border-gray-300 p-2 my-1"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <>{content}</>
    </div>
  );
};

export default PrepositionCard;
