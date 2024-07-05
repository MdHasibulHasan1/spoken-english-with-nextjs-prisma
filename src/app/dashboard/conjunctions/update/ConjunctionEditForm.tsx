"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

interface Example {
  english: string;
  bangla: string;
}

interface FormData {
  conjunction: string;
  explanation: string;
  examples: Example[];
  id?: string;
  serialNumber?: number;
}

const ConjunctionEditForm: React.FC = ({
  conjunction,
  explanation,
  examples,
  id,
  serialNumber,
}: FormData) => {
  const [formData, setFormData] = useState<FormData>({
    conjunction,
    explanation,
    examples,
    serialNumber,
  });
  const router = useRouter();
  const [message, setMessage] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExampleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newExamples = formData.examples.map((example, i) =>
      i === index ? { ...example, [name]: value } : example
    );
    setFormData({ ...formData, examples: newExamples });
  };

  const addExample = () => {
    setFormData({
      ...formData,
      examples: [...formData.examples, { english: "", bangla: "" }],
    });
  };

  const removeExample = (index: number) => {
    const newExamples = formData.examples.filter((_, i) => i !== index);
    setFormData({ ...formData, examples: newExamples });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/conjunction/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Success:", data);
      if (data.success) {
        toast.success(data.message);
        setMessage(data.message);
      } else {
        toast.error(data.message);
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const deleteConjunction = async () => {
    try {
      const res = await axios.delete(`/api/conjunction/${id}`);
      console.log(res);
      toast.success("Conjunction deleted successfully.");
      router.push("/dashboard/conjunctions/mine");
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
          Serial Number:
        </label>
        <input
          type="number"
          name="serialNumber"
          value={formData?.serialNumber}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Conjunction:
        </label>
        <input
          type="text"
          name="conjunction"
          value={formData.conjunction}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Explanation:
        </label>
        <input
          type="text"
          name="explanation"
          value={formData.explanation}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Examples:
        </label>
        {formData.examples.map((example, index) => (
          <div key={index} className="mb-2 flex gap-2 items-center">
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
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              <RiDeleteBinLine size={20} color="white" />
            </button>
          </div>
        ))}
        <div className="flex justify-start">
          <button type="button" onClick={addExample} className="btn btn-circle">
            <MdAddCircleOutline size={24} />
          </button>
        </div>
      </div>{" "}
      <div className="flex justify-between items-center mt-6">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline w-4/5"
        >
          Update
        </button>
        <button
          type="button"
          onClick={deleteConjunction}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-full focus:outline-none focus:shadow-outline w-1/5 flex items-center justify-center"
        >
          <RiDeleteBinLine className="mr-2" size={20} />
          Delete
        </button>
        <p className="text-red-500 ">{message}</p>
      </div>
    </form>
  );
};

export default ConjunctionEditForm;
