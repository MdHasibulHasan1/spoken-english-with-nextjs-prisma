"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, type infer as Infer } from "zod";
import { toast } from "react-hot-toast";
import { MdAddCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

// Define the Zod schema with an optional id field
const prepositionSchema = z.object({
  id: z.string().optional(),
  title: z.string().nonempty("Title is required"),
  expressions: z.array(z.string().nonempty("Expression is required")),
  usages: z.array(
    z.object({
      description: z.string().nonempty("Description is required"),
      examples: z.array(z.string().nonempty("Example is required")),
    })
  ),
});

type FormData = Infer<typeof prepositionSchema>;

const PrepositionsFormWithZod: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(prepositionSchema),
    defaultValues: {
      id: undefined,
      title: "",
      expressions: [""],
      usages: [{ description: "", examples: [""] }],
    },
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

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await fetch("/api/preposition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
      toast.dismiss(toastId);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error?.message || "Something went wrong. Update failed.");
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
          type="text"
          {...register("title")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && (
          <p className="text-red-500 text-xs">{errors.title.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Expressions:
        </label>
        {expressionFields.map((field, index) => (
          <div key={field.id} className="mb-2 flex gap-2 items-center">
            <input
              type="text"
              {...register(`expressions.${index}` as const)}
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
              <p className="text-red-500 text-xs">
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
                type="text"
                {...register(`usages.${index}.description` as const)}
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
                <p className="text-red-500 text-xs">
                  {errors.usages[index]?.description?.message}
                </p>
              )}
            </div>

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Examples:
            </label>
            <div>
              {field.examples.map((example, subIndex) => (
                <div key={subIndex} className="mb-2 flex gap-2 items-center">
                  <input
                    type="text"
                    {...register(
                      `usages.${index}.examples.${subIndex}` as const
                    )}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedExamples = field.examples.filter(
                        (_, i) => i !== subIndex
                      );
                      setValue(`usages.${index}.examples`, updatedExamples);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    <RiDeleteBinLine color="white" />
                  </button>
                  {errors.usages &&
                    errors.usages[index]?.examples[subIndex] && (
                      <p className="text-red-500 text-xs">
                        {errors.usages[index]?.examples[subIndex]?.message}
                      </p>
                    )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const updatedExamples = [...field.examples, ""];
                  setValue(`usages.${index}.examples`, updatedExamples);
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
          className="btn btn-blue w-full"
        >
          Add Usage
        </button>
      </div>

      <button
        type="submit"
        className="bg-green-500 w-full disabled:bg-green-200 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default PrepositionsFormWithZod;
