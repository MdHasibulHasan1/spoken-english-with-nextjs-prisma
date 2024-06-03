"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { createBlog } from "./actions";
import { Blog, Example } from "@/types/types";

const AddBlogForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Blog>({
    bloggerName: "",
    bloggerImage: "",
    bloggerEmail: "",
    structure: "",
    description: "",
    examples: [{ english: "", bangla: "" }],
    category: "",
    createdAt: new Date(),
  });
  const [blogLoading, setBlogLoading] = useState(false);

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
    setBlogLoading(true);
    try {
      const blog = await createBlog(formData);
      console.log(blog);
      /*  setFormData({
        ...formData,
        structure: "",
        description: "",
        examples: [{ english: "", bangla: "" }],
        category: "question",
      }); */
      // router.push("/");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
    setBlogLoading(false);
  };

  return (
    <form onSubmit={onSubmitForm} className="md:w-8/12 mx-auto px-2">
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
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
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
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addExample}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Example
        </button>
      </div>
      <button
        type="submit"
        disabled={blogLoading}
        className="px-4 py-2 w-full disabled:cursor-not-allowed disabled:opacity-50 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {blogLoading ? "Adding..." : "Add Blog"}
      </button>
    </form>
  );
};

export default AddBlogForm;
