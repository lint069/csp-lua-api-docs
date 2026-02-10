import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        status: z
          .enum(["complete", "incomplete", "stub", "internal"])
          .optional()
          .default("complete"),
      }),
    }),
  }),
};
