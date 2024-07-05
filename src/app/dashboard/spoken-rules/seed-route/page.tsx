"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { Rule, Example } from "@/types/types";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import toast from "react-hot-toast";

const AddRuleForm: React.FC = () => {
  const router = useRouter();
  const rule = {
    category: "Using 'Insisted on' in Past Tense",
    structure:
      "Subject + Insisted on + Verb (ing) (কেউ কিছু করার জন্য জিদ করেছিল, Did এর নিয়ম ব্যবহার হবে)",
    note: "'Insisted on' ব্যবহার করা হয় যখন কেউ কিছু করার জন্য জিদ করেছিল বোঝাতে।",
    examples: [
      // Affirmative Examples
      {
        english: "I insisted on going there.",
        bangla: "আমি সেখানে যেতে জিদ করেছিলাম।",
      },
      {
        english: "She insisted on coming with us.",
        bangla: "সে আমাদের সাথে আসতে জিদ করেছিল।",
      },
      {
        english: "They insisted on playing outside.",
        bangla: "তারা বাইরে খেলতে জিদ করেছিল।",
      },
      {
        english: "He insisted on finishing the project.",
        bangla: "সে প্রকল্পটি শেষ করতে জিদ করেছিল।",
      },
      {
        english: "We insisted on meeting him.",
        bangla: "আমরা তার সাথে দেখা করতে জিদ করেছিলাম।",
      },
      {
        english: "I insisted on staying here.",
        bangla: "আমি এখানে থাকতে জিদ করেছিলাম।",
      },
      {
        english: "She insisted on cooking dinner.",
        bangla: "সে রাতের খাবার রান্না করতে জিদ করেছিল।",
      },
      {
        english: "They insisted on watching the movie.",
        bangla: "তারা সিনেমা দেখতে জিদ করেছিল।",
      },
      {
        english: "He insisted on speaking first.",
        bangla: "সে প্রথমে কথা বলতে জিদ করেছিল।",
      },
      {
        english: "We insisted on helping them.",
        bangla: "আমরা তাদের সাহায্য করতে জিদ করেছিলাম।",
      },
      // Negative Examples
      {
        english: "I did not insist on going there.",
        bangla: "আমি সেখানে যেতে জিদ করিনি।",
      },
      {
        english: "She did not insist on coming with us.",
        bangla: "সে আমাদের সাথে আসতে জিদ করেনি।",
      },
      {
        english: "They did not insist on playing outside.",
        bangla: "তারা বাইরে খেলতে জিদ করেনি।",
      },
      {
        english: "He did not insist on finishing the project.",
        bangla: "সে প্রকল্পটি শেষ করতে জিদ করেনি।",
      },
      {
        english: "We did not insist on meeting him.",
        bangla: "আমরা তার সাথে দেখা করতে জিদ করিনি।",
      },
      // Interrogative Examples
      {
        english: "Did you insist on going there?",
        bangla: "তুমি কি সেখানে যেতে জিদ করেছিলে?",
      },
      {
        english: "Did she insist on coming with us?",
        bangla: "সে কি আমাদের সাথে আসতে জিদ করেছিল?",
      },
      {
        english: "Did they insist on playing outside?",
        bangla: "তারা কি বাইরে খেলতে জিদ করেছিল?",
      },
      {
        english: "Did he insist on finishing the project?",
        bangla: "সে কি প্রকল্পটি শেষ করতে জিদ করেছিল?",
      },
      {
        english: "Did we insist on meeting him?",
        bangla: "আমরা কি তার সাথে দেখা করতে জিদ করেছিলাম?",
      },
      // Interrogative Examples with What, When, Why, Where, How
      {
        english: "What did you insist on doing?",
        bangla: "তুমি কি করতে জিদ করেছিলে?",
      },
      {
        english: "When did you insist on going?",
        bangla: "তুমি কখন যেতে জিদ করেছিলে?",
      },
      {
        english: "Why did you insist on leaving?",
        bangla: "তুমি কেন চলে যেতে জিদ করেছিলে?",
      },
      {
        english: "Where did you insist on meeting?",
        bangla: "তুমি কোথায় দেখা করতে জিদ করেছিলে?",
      },
      {
        english: "How did you insist on solving this?",
        bangla: "তুমি কিভাবে এটি সমাধান করতে জিদ করেছিলে?",
      },
    ],
  };

  const [formData, setFormData] = useState<Rule>(rule);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleExampleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedExamples = [...formData.examples];
    updatedExamples[index][name as keyof Example] = value;
    setFormData({
      ...formData,
      examples: updatedExamples,
    });
  };

  const addExample = () => {
    setFormData({
      ...formData,
      examples: [...formData.examples, { english: "", bangla: "" }],
    });
  };

  const removeExample = (index: number) => {
    const updatedExamples = [...formData.examples];
    updatedExamples.splice(index, 1);
    setFormData({
      ...formData,
      examples: updatedExamples,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      const res = await fetch("/api/spoken-rules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      /*   if (!res.ok) {
        throw new Error("Failed to save conjunction");
      } */

      const data = await res.json();
      if (data.success) {
        toast.success(data.message);

        toast.dismiss(toastId);
      } else {
        toast.error(data.message);

        toast.dismiss(toastId);
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-8/12 mx-auto p-4 rounded-lg bg-white"
    >
      <div className="mb-4">
        <label htmlFor="category" className="block font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          id="category"
          className="form-select mt-1 block w-full rounded-md border border-gray-800 p-2"
        >
          <option value="question">Question</option>
          <option value="all">All</option>
          <option value="modal verb">Modal verb</option>
          <option value="use of wh words">Use of wh words</option>
          <option value="preposition">Preposition</option>
          <option value="introductory there">Introductory There</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="structure"
          className="block mb-2 font-medium text-gray-700"
        >
          Structure*
        </label>
        <textarea
          id="structure"
          name="structure"
          value={formData.structure}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="note" className="block mb-2 font-medium text-gray-700">
          Note
        </label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Examples:
        </label>
        {formData.examples.map((example, index) => (
          <div key={index} className="mb-2 flex gap-2">
            <input
              type="text"
              name="english"
              placeholder="English"
              value={example.english}
              onChange={(e) => handleExampleChange(index, e)}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              name="bangla"
              placeholder="Bangla"
              value={example.bangla}
              onChange={(e) => handleExampleChange(index, e)}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={() => removeExample(index)}
              className=" font-bold rounded focus:outline-none focus:shadow-outline"
            >
              <RiDeleteBinLine size={24} color="red" />
            </button>
          </div>
        ))}

        <div className="flex justify-start">
          <button type="button" onClick={addExample} className="btn btn-circle">
            <MdAddCircleOutline size={24} />
          </button>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 w-full disabled:cursor-not-allowed disabled:opacity-50 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {isLoading ? "Adding..." : "Add Blog"}
      </button>
    </form>
  );
};

export default AddRuleForm;
