"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Rule, Example } from "@/types/types";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { addRule } from "./actions";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { User } from "next-auth";

const AddRuleForm: React.FC = () => {
  const { data: session } = useSession();
  const user: User = session?.user;

  const [formData, setFormData] = useState<Rule>({
    structure: "",
    note: "",
    examples: [{ english: "", bangla: "" }],
    category: "All",
    userId: user?.id,
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
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

  const onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    setIsLoading(true);
    try {
      const rule = await addRule(formData);
      if (rule?.success) {
        toast.success(rule?.message);
        toast.dismiss(toastId);
        setIsLoading(false);
      } else {
        toast.error(rule?.message);
        toast.dismiss(toastId);

        setIsLoading(false);
      }

      // console.log("Success:", rule);

      /*  setFormData({
        ...formData,
        structure: "",
        note: "",
        examples: [{ english: "", bangla: "" }],
        category: "question",
      }); */
      // router.push("/");
    } catch (error) {
      console.error("Error adding blog:", error);
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitForm}
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
