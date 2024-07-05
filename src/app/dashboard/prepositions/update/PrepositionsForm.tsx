"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdAddCircleOutline, MdDeleteForever } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { prepositionSchema } from "@/schemas/prepositionSchemas";
import { z } from "zod";

type FormData = z.infer<typeof prepositionSchema>;

const PrepositionsForm: React.FC<FormData> = ({
  expressions,
  title,
  usages,
  id,
}: FormData) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { title, expressions, usages },
    resolver: zodResolver(prepositionSchema),
  });

  const {
    fields: expressionFields,
    append: appendExpression,
    remove: removeExpression,
  } = useFieldArray({
    control,
    name: "expressions",
  });

  const {
    fields: usageFields,
    append: appendUsage,
    remove: removeUsage,
  } = useFieldArray({
    control,
    name: "usages",
  });

  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await fetch(`/api/preposition/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      if (response.success) {
        toast.dismiss(toastId);
        toast.success("Your Preposition Updated successfully");
        setMessage(response.message);
      } else {
        toast.dismiss(toastId);
        toast.error("Your Preposition is not Updated successfully");
        setMessage(response.message);
      }
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(toastId);
      toast.error(error.message || "Something went wrong. update failed.");
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
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 shadow-md rounded-md bg-white"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          {...register("title")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">{errors.title.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Expressions:
        </label>
        {expressionFields.map((field, index) => (
          <div key={field.id} className="mb-2 flex gap-2 items-center">
            <input
              {...register(`expressions.${index}`)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={() => removeExpression(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <RiDeleteBinLine color="white" />
            </button>
            {errors.expressions && errors.expressions[index] && (
              <p className="text-red-500 text-xs italic">
                {errors.expressions[index]?.message}
              </p>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendExpression("")}
          className="btn btn-blue"
        >
          Add Expression
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Usages:
        </label>
        {usageFields.map((field, index) => (
          <div key={field.id} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <div className="mb-2 flex gap-2 items-center">
              <input
                {...register(`usages.${index}.description`)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={() => removeUsage(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <RiDeleteBinLine color="white" />
              </button>
              {errors.usages && errors.usages[index]?.description && (
                <p className="text-red-500 text-xs italic">
                  {errors.usages[index]?.description?.message}
                </p>
              )}
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Examples:
            </label>
            {field.examples.map((_, subIndex) => (
              <div key={subIndex} className="mb-2 flex gap-2 items-center">
                <input
                  {...register(`usages.${index}.examples.${subIndex}`)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  type="button"
                  onClick={() => {
                    const examples = [...usageFields[index].examples];
                    examples.splice(subIndex, 1);
                    usageFields[index].examples = examples;
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <RiDeleteBinLine color="white" />
                </button>
                {errors.usages &&
                  errors.usages[index]?.examples?.[subIndex] && (
                    <p className="text-red-500 text-xs italic">
                      {errors.usages[index]?.examples?.[subIndex]?.message}
                    </p>
                  )}
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const examples = [...usageFields[index].examples, ""];
                  usageFields[index].examples = examples;
                }}
                className="btn btn-circle"
              >
                <MdAddCircleOutline size={24} />
              </button>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => appendUsage({ description: "", examples: [""] })}
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
