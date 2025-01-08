import { z } from "zod";

const RankSetupSchema = z.object({
  newRank: z
    .string()
    .min(3, { message: "Rank must contain atleast 3 character" }),
  divisions: z
    .string()
    .min(3, { message: "Divison must contain atleast 3 character" }),
  stars: z
    .string()
    .min(3, { message: "Stars must contain atleast 3 character" }),
  rankDescriptions: z.string().optional(),
});

export default RankSetupSchema;
export type RankSetupSchemaType = z.infer<typeof RankSetupSchema>;
