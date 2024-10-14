"use client";
import { Example, Rule } from "@/types/types";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaRegCopy, FaCheck, FaStar, FaRegStar } from "react-icons/fa";
import { MdNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa"; // Make sure to import the icon you want to use
interface SpokenRuleCardProps extends Rule {}

const SpokenRuleCard: React.FC<{ rule: Rule }> = ({ rule }: any) => {
  const {
    structure,
    note,
    examples,
    category,
    createdAt,
    id,
    author,
    userId,
    favorites,
  } = rule;
  const cardRef = useRef<HTMLDivElement>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(userId));

  const handleCopy = () => {
    if (cardRef.current) {
      const textToCopy = cardRef.current.innerText;
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          setCopySuccess(true);
          toast.success("Text copied to clipboard!");
          setTimeout(() => setCopySuccess(false), 5000); // Reset icon after 5 seconds
        },
        (err) => {
          toast.error("Could not copy text: ", err);
        }
      );
    }
  };

  const toggleFavorite = async () => {
    setIsLoading(true);
    const toastId = toast.loading("Loading...");

    const res = await fetch("/api/spoken-rules/toggle-favorite", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, userId }),
    });

    if (res.ok) {
      const { message } = await res.json();
      setIsFavorite(!isFavorite);
      toast.success(message);
      toast.dismiss(toastId);
      setIsLoading(false);
    } else {
      toast.error(`Error toggling favorite status`);
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8  font-bold p-2 w-full max-w-md mx-auto bg-white rounded-xl shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="flex flex-col items-center md:flex-row justify-between mb-4">
        <div className="text-sm text-gray-600 mb-2 md:mb-0">
          Created by: <span className="font-semibold">{author.name}</span>
        </div>
        <div className="flex-shrink-0">
          <Link href={`/dashboard/spoken-rules/update/${id}`}>
            <button className=" rounded transition-colors duration-200">
              <FaEdit className="mr-2" /> {/* Icon for update */}
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-600">
          Created At:{" "}
          <span className="font-semibold">
            {new Date(createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
        </div>
      </div>
      {/* ----------------- */}
      <div ref={cardRef} className="bg-gray-100 relative">
        <div className="bg-white rounded-lg p-2 shadow-md mb-4 border-t-8 border-indigo-600 relative">
          <div className="flex w-full justify-center">
            <div className="bg-white rounded-lg p-2 w-full">
              <h2 className="text-purple-700 text-center text-lg font-bold">
                {structure}
              </h2>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {examples?.map((example: Example, idx: number) => (
              <li
                key={idx}
                className="border-b border-gray-300 pb-2 last:border-b-0 transform transition-transform hover:scale-105"
              >
                <div className="bg-gray-200 p-2 rounded-md">
                  <p className="text-gray-800 mb-1">
                    <span className="font-bold">➤</span>
                    <span className="text-gray-700">{example.english}</span>
                  </p>
                  <p className="text-gray-800">
                    <span className="font-bold">⇒</span>
                    <span className="text-gray-700">{example.bangla}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {note && (
            <div className="mt-4 bg-yellow-100 p-4 rounded-lg border border-yellow-300 shadow-inner flex items-center space-x-2">
              <MdNote className="text-yellow-600" size={24} />
              <div className="text-sm text-gray-800">
                <strong className="text-yellow-700">Note:</strong>{" "}
                <span>{note}</span>
              </div>
            </div>
          )}

          {/* Watermark below examples */}
          <p className="absolute bottom-12 right-4 text-gray-400 text-4xl transform rotate-[-30deg] font-bold opacity-20">
            English Elevate
          </p>
          <p className="absolute top-2/4 right-4 text-gray-400 text-4xl transform rotate-[-30deg] font-bold opacity-20">
            English Elevate
          </p>
          <p className="absolute top-12 right-4 text-gray-400 text-4xl transform rotate-[-30deg] font-bold opacity-20">
            English Elevate
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row justify-center mt-6 space-y-2 md:space-y-0 md:space-x-2">
        <button
          onClick={handleCopy}
          className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 transition-colors duration-300 shadow-md"
        >
          {copySuccess ? (
            <>
              <FaCheck className="mr-2" /> Copied
            </>
          ) : (
            <>
              <FaRegCopy className="mr-2" /> Copy
            </>
          )}
        </button>
        <button
          disabled={isLoading}
          onClick={toggleFavorite}
          className={`flex items-center justify-center px-4 py-2 text-white rounded-lg transition-colors duration-300 shadow-md ${
            isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-yellow-500 hover:bg-yellow-600"
          } ${isLoading ? "disabled:bg-opacity-50" : ""}`}
        >
          {isFavorite ? (
            <>
              <FaStar className="mr-2" /> Remove Favorite
            </>
          ) : (
            <>
              <FaRegStar className="mr-2" /> Add to Favorites
            </>
          )}
        </button>
      </div> */}
    </div>
  );
};

export default SpokenRuleCard;
