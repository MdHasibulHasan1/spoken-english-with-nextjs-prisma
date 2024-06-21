import { SpokenRule } from "@/types/types";

interface SpokenRuleCardProps extends Blog {}

const SpokenRuleCard: React.FC<SpokenRuleCardProps> = ({
  bloggerName,
  bloggerImage,
  bloggerEmail,
  structure,
  description,
  examples,
  category,
  createdAt,
  id,
}: SpokenRule) => {
  return (
    <div className="mb-8 w-10/12 mx-auto p-6 bg-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200">
      {/* <div>{id}</div> */}
      <div className="mb-2">
        <div className="relative flex w-full conjunctions-center justify-center rounded-lg mx-auto bg-yellow-400">
          <div className="flex text-center md:px-4 px-2 py-2 bg-white w-11/12 rounded-lg justify-center font-bold conjunctions-center cursor-not-allowed text-purple-800">
            {structure}
            {description}
          </div>
        </div>
      </div>
      <ul className="space-y-4">
        {examples?.map((example, idx) => (
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
  );
};

export default SpokenRuleCard;
