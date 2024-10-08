import React from "react";

interface Example {
  examples: string[];
}

interface Blog {
  structure?: string;
  examples: Example[];
}

interface Blog2Props {
  blog?: Blog;
}

const Blog2: React.FC<Blog2Props> = ({ blog }) => {
  return (
    <div>
      <div className="mb-8 p-6 bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200">
        <div className="mb-2">
          <div className="relative flex w-full items-center justify-center rounded-lg mx-auto bg-yellow-400">
            <div className="flex text-center px-4 py-2 bg-white w-11/12 rounded-lg justify-center font-bold items-center cursor-not-allowed text-purple-800">
              {blog?.structure}
            </div>
          </div>
        </div>
        <ul className="space-y-4">
          {blog?.examples.map((item, idx) => (
            <li
              key={idx}
              className="border-b pb-4 last:border-b-0 transition-transform transform hover:scale-105"
            >
              <p className="text-gray-800 mb-2">
                <strong className="text-gray-900">English:</strong>{" "}
                {item.examples[0]?.split("┈➤")[0]?.trim()}
              </p>
              <p className="text-gray-800">
                <strong className="text-gray-900">Bangla:</strong>{" "}
                {item.examples[0]
                  ?.split("┈➤")[1]
                  ?.replace(/☆/g, "")
                  ?.trim()
                  ?.toLowerCase()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog2;
