import { z } from "zod";

export const prepositionSchema = z.object({
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
