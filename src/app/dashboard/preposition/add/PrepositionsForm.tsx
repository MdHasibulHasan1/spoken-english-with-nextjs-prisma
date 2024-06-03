"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface PrepositionsUsages {
  description: string;
  examples: string[];
}

interface FormData {
  expressions: string[];
  title: string;
  usages: PrepositionsUsages[];
}

const PrepositionsForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    expressions: [""],
    title: "",
    usages: [{ description: "", examples: [""] }],
  });

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

    try {
      const res = await fetch("/api/prepositions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to save preposition");
      }

      const data = await res.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
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
          <div key={index} className="mb-2 flex gap-2">
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
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addExpression}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Expression
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Usages:
        </label>
        {formData.usages.map((usage, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2 flex gap-2">
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
                Remove
              </button>
            </div>
            {usage.examples.map((example, subIndex) => (
              <div key={subIndex} className="mb-2 flex gap-2">
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
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addUsageExample(index)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Example
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addUsage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Usage
        </button>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default PrepositionsForm;
