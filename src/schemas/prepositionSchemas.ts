import { z } from "zod";

// Modify your zod schema to include 'author'
export const prepositionSchema = z.object({
  title: z.string(),
  expressions: z.array(z.string()),
  usages: z.array(
    z.object({
      description: z.string(),
      examples: z.array(z.string()),
    })
  ),
  author: z.string(), // Add this field if it's required
});
