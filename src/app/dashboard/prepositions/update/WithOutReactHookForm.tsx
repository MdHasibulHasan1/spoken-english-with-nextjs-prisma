"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdAddCircleOutline, MdDeleteForever } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

interface PrepositionsUsages {
  description: string;
  examples: string[];
}

interface FormData {
  expressions: string[];
  title: string;
  usages: PrepositionsUsages[];
  id?: string; // Add `id` as an optional property if you intend to use it.
}
const PrepositionsForm: React.FC<FormData> = ({
  expressions,
  title,
  usages,
  id,
}) => {
  const [formData, setFormData] = useState<FormData>({
    expressions,
    title,
    usages,
    id,
  });

  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    field: string,
    subIndex?: number
  ) => {
    const { value } = e.target;

    if (field === "expressions") {
      const newExpressions = [...formData.expressions];
      newExpressions[index] = value;
      setFormData({ ...formData, expressions: newExpressions });
    } else if (field === "usagesDescription") {
      const newUsages = [...formData.usages];
      newUsages[index].description = value;
      setFormData({ ...formData, usages: newUsages });
    } else if (field === "usagesExamples" && subIndex !== undefined) {
      const newUsages = [...formData.usages];
      newUsages[index].examples[subIndex] = value;
      setFormData({ ...formData, usages: newUsages });
    }
  };

  const addExpression = () => {
    setFormData({ ...formData, expressions: [...formData.expressions, ""] });
  };

  const removeExpression = (index: number) => {
    const newExpressions = formData.expressions.filter((_, i) => i !== index);
    setFormData({ ...formData, expressions: newExpressions });
  };

  const addUsage = () => {
    setFormData({
      ...formData,
      usages: [...formData.usages, { description: "", examples: [""] }],
    });
  };

  const removeUsage = (index: number) => {
    const newUsages = formData.usages.filter((_, i) => i !== index);
    setFormData({ ...formData, usages: newUsages });
  };

  const addUsageExample = (index: number) => {
    const newUsages = [...formData.usages];
    newUsages[index].examples.push("");
    setFormData({ ...formData, usages: newUsages });
  };

  const removeUsageExample = (index: number, subIndex: number) => {
    const newUsages = [...formData.usages];
    newUsages[index].examples = newUsages[index].examples.filter(
      (_, i) => i !== subIndex
    );
    setFormData({ ...formData, usages: newUsages });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    try {
      const res = await fetch(`/api/preposition/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.dismiss(toastId);
        toast.success("Your Preposition Updated successfully");
        setMessage(data.message);
      } else {
        toast.dismiss(toastId);
        toast.success("Your Preposition is not Updated successfully");
        setMessage(data.message);
      }
      console.log("Success:", data);
    } catch (error: unknown) {
      toast.dismiss(toastId);
      let errorMessage = "Something went wrong. Update failed.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    }
  };
  const deletePreposition = async () => {
    try {
      const res = await axios.delete(`/api/preposition/${id}`);
      console.log(res);
      toast.success("Preposition deleted successfully.");
      router.push("/dashboard/preposition/mine");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 shadow-md rounded-md bg-white"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Expressions:
        </label>
        {formData.expressions.map((expression, index) => (
          <div key={index} className="mb-2 flex gap-2 items-center">
            <input
              type="text"
              value={expression}
              onChange={(e) => handleInputChange(e, index, "expressions")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={() => removeExpression(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <RiDeleteBinLine color="white" />
            </button>
          </div>
        ))}
        <button type="button" onClick={addExpression} className="btn btn-blue">
          Add Expression
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Usages:
        </label>
        {formData.usages.map((usage, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <div className="mb-2 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Description"
                value={usage.description}
                onChange={(e) =>
                  handleInputChange(e, index, "usagesDescription")
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={() => removeUsage(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <RiDeleteBinLine color="white" />
              </button>
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Examples:
            </label>
            {usage.examples.map((example, subIndex) => (
              <div key={subIndex} className="mb-2 flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Example"
                  value={example}
                  onChange={(e) =>
                    handleInputChange(e, index, "usagesExamples", subIndex)
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  onClick={() => removeUsageExample(index, subIndex)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <RiDeleteBinLine color="white" />
                </button>
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => addUsageExample(index)}
                className="btn btn-circle"
              >
                <MdAddCircleOutline size={24} />
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addUsage}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center shadow-md"
        >
          <MdAddCircleOutline size={24} className="mr-2" />
          Add Usage
        </button>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/4"
        >
          Update
        </button>
        <button
          type="button"
          onClick={deletePreposition}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/5 flex items-center justify-center"
        >
          <RiDeleteBinLine className="mr-2" size={20} />
          Delete
        </button>
      </div>
      <p className="text-red-500 p-2 rounded-md">{message}</p>
    </form>
  );
};

export default PrepositionsForm;
