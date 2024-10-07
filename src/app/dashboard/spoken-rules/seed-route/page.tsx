"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Rule, Example } from "@/types/types";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import rule from "./fakeData"; // Assuming fakeData is imported correctly
import toast from "react-hot-toast";

const AddRuleForm: React.FC = () => {
  const router = useRouter();

  // Set the initial state from the fakeData
  const [formData, setFormData] = useState<Rule>({
    category: rule.category,
    structure: rule.structure,
    note: rule.note,
    examples: rule.examples,
    userId: "", // Set the userId, you can replace "" with the actual userId if available
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes for text areas and inputs
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle input changes for examples array
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

  // Add a new example entry
  const addExample = () => {
    setFormData({
      ...formData,
      examples: [...formData.examples, { english: "", bangla: "" }],
    });
  };

  // Remove an example entry
  const removeExample = (index: number) => {
    const updatedExamples = [...formData.examples];
    updatedExamples.splice(index, 1); // Remove the example at the given index
    setFormData({
      ...formData,
      examples: updatedExamples,
    });
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading..."); // Show loading toast
    setIsLoading(true); // Set loading state

    try {
      const res = await fetch("/api/spoken-rules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message); // Success toast
        toast.dismiss(toastId); // Dismiss loading toast
        setIsLoading(false);
        router.push("/"); // Redirect after success (if needed)
      } else {
        toast.error(data.message); // Error toast
        toast.dismiss(toastId); // Dismiss loading toast
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Failed to submit the rule!"); // Error toast
      toast.dismiss(toastId); // Dismiss loading toast
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-8/12 mx-auto p-4 rounded-lg bg-white"
    >
      {/* Category Selection */}
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
          <option value="all">All</option>
          <option value="question">Question</option>
          <option value="modal verb">Modal verb</option>
          <option value="use of wh words">Use of wh words</option>
          <option value="preposition">Preposition</option>
          <option value="introductory there">Introductory There</option>
          <option value="introductory it">Introductory It</option>
          <option value="relative pronoun">Relative Pronoun</option>
          <option value="phrase">Phrase</option>
          <option value="rules">Rules</option>
          <option value="imperative sentence">Imperative Sentence</option>
        </select>
      </div>

      {/* Structure Input */}
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

      {/* Note Input */}
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

      {/* Examples Input */}
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
              className="font-bold rounded focus:outline-none focus:shadow-outline"
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

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 w-full disabled:cursor-not-allowed disabled:opacity-50 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {isLoading ? "Adding..." : "Add Rule"}
      </button>
    </form>
  );
};

export default AddRuleForm;
