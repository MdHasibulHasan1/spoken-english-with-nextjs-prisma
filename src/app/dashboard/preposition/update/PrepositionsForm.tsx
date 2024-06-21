"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdAddCircleOutline, MdDeleteForever } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useForm, useFieldArray, Controller } from "react-hook-form";

interface PrepositionsUsages {
  description: string;
  examples: string[];
}

interface FormData {
  expressions: string[];
  title: string;
  usages: PrepositionsUsages[];
  id: string;
  serialNumber?: number;
}

const PrepositionsForm: React.FC<FormData> = ({
  expressions,
  title,
  usages,
  id,
  serialNumber,
}: FormData) => {
  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      expressions,
      title,
      usages,
      id,
      serialNumber,
    },
  });

  const expressionsFieldArray = useFieldArray({
    control,
    name: "expressions",
  });

  const usagesFieldArray = useFieldArray({
    control,
    name: "usages",
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await fetch(`/api/preposition/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      toast.dismiss(toastId);
      if (result.success) {
        toast.success("Your Preposition Updated successfully");
        setValue("message", result.message);
      } else {
        toast.error("Your Preposition is not Updated successfully");
        setValue("message", result.message);
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "Something went wrong. Update failed.");
    }
  };

  const deletePreposition = async () => {
    try {
      await axios.delete(`/api/preposition/${id}`);
      toast.success("Preposition deleted successfully.");
      router.push("/dashboard/preposition/mine");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const message = watch("message");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 shadow-md rounded-md bg-white"
    >
      {" "}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Serial Number:
        </label>
        <Controller
          name="serialNumber"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Expressions:
        </label>
        {expressionsFieldArray.fields.map((item, index) => (
          <div key={item.id} className="mb-2 flex gap-2 items-center">
            <Controller
              name={`expressions.${index}`}
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            />
            <button
              type="button"
              onClick={() => expressionsFieldArray.remove(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <RiDeleteBinLine color="white" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => expressionsFieldArray.append("")}
          className="btn btn-blue"
        >
          Add Expression
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Usages:
        </label>
        {usagesFieldArray.fields.map((usage, index) => (
          <div key={usage.id} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <div className="mb-2 flex gap-2 items-center">
              <Controller
                name={`usages.${index}.description`}
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Description"
                    {...field}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                )}
              />
              <button
                type="button"
                onClick={() => usagesFieldArray.remove(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <RiDeleteBinLine color="white" />
              </button>
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Examples:
            </label>
            <Controller
              name={`usages.${index}.examples`}
              control={control}
              render={({ field }) =>
                field.value.map((example, subIndex) => (
                  <div key={subIndex} className="mb-2 flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Example"
                      value={example}
                      onChange={(e) => {
                        const newExamples = [...field.value];
                        newExamples[subIndex] = e.target.value;
                        setValue(`usages.${index}.examples`, newExamples);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newExamples = field.value.filter(
                          (_, i) => i !== subIndex
                        );
                        setValue(`usages.${index}.examples`, newExamples);
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      <RiDeleteBinLine color="white" />
                    </button>
                  </div>
                ))
              }
            />
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const newExamples = [
                    ...watch(`usages.${index}.examples`),
                    "",
                  ];
                  setValue(`usages.${index}.examples`, newExamples);
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
          onClick={() =>
            usagesFieldArray.append({ description: "", examples: [""] })
          }
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
