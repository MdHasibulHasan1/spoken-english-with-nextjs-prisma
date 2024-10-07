"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Rule, Example } from "@/types/types";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import axios from "axios";

interface RuleEditFormProps {
  rule: Rule;
}

const RuleEditForm: React.FC<RuleEditFormProps> = ({ rule }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<Rule>(rule);
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    setIsLoading(true);
    try {
      const res = await fetch(`/api/spoken-rules/${rule.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      toast.dismiss(toastId);
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error("Error updating rule:", error);
      toast.dismiss(toastId);
      toast.error("Failed to update the rule.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteRule = async () => {
    try {
      await axios.delete(`/api/spoken-rules/${rule?.id}`);
      toast.success("Rule deleted successfully.");
      router.push("/dashboard/spoken-rules/mine");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="md:w-8/12 mx-auto p-4 rounded-lg bg-white"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Serial Number:
        </label>
        <input
          type="number"
          name="serialNumber"
          value={formData?.serialNumber ?? 0}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

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
          value={formData?.note}
          onChange={handleInputChange}
          className="block w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Examples:
        </label>
        {formData?.examples?.map((example, index) => (
          <div
            key={index}
            className="flex gap-2 items-center mb-2 bg-gray-100 p-2 rounded"
          >
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

      <div className="flex justify-between items-center mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/4"
        >
          {isLoading ? "Updating" : "Update"}
        </button>
        <button
          type="button"
          onClick={deleteRule}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/5 flex items-center justify-center"
        >
          <RiDeleteBinLine className="mr-2" size={20} />
          Delete
        </button>
      </div>
    </form>
  );
};

export default RuleEditForm;
