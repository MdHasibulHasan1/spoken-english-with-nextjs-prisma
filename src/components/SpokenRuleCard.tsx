"use client";
import { Example, Rule } from "@/types/types";
import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaRegCopy, FaCheck, FaStar, FaRegStar } from "react-icons/fa";
import { MdNote } from "react-icons/md";

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
    <div className="mb-8 w-10/12 mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">Created by: {author.name}</div>
        <div>
          <Link href={`/dashboard/spoken-rules/update/${id}`}>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
              Update Data
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-600">
          Created At:{" "}
          {new Date(createdAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </div>
      <div ref={cardRef}>
        <div className="mb-4">
          <div className="relative flex w-full items-center justify-center rounded-lg mx-auto bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="flex flex-col items-center text-center md:px-4 px-2 py-4 bg-white w-11/12 rounded-lg font-bold text-purple-800">
              <div className="text-lg">{structure}</div>
            </div>
          </div>
        </div>
        <ul className="space-y-6">
          {examples?.map((example: Example, idx: string) => (
            <li
              key={idx}
              className="border-b pb-4 last:border-b-0 transition-transform transform hover:scale-105"
            >
              <p className="text-gray-800 mb-1">
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
        {note && (
          <div className="mt-4  bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-lg border border-yellow-300 shadow-inner flex items-center space-x-2">
            <MdNote className="text-yellow-600" size={24} />
            <div className="text-sm text-gray-800">
              <strong className="text-yellow-700">Note:</strong> {note}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 transition-colors duration-300 shadow-md flex items-center mr-2"
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
          className={`px-4 py-2 ${
            isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-yellow-500 hover:bg-yellow-600"
          } text-white rounded-lg transition-colors duration-300 shadow-md flex items-center ${
            isLoading ? "disabled:bg-opacity-50" : ""
          }`}
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
      </div>
    </div>
  );
};

export default SpokenRuleCard;
