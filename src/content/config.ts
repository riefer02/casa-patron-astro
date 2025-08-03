import { defineCollection, z } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    author: z.string(),
    date: z.date(),
    order: z.number(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    author: z.string(),
    date: z.date(),
    publishDate: z.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    category: z.string().default("general"),
  }),
});

export const collections = {
  docs: docsCollection,
  posts: postsCollection,
};
