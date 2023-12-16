import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean(),
        activeNav: z.enum([
            "~",
            "about",
            "stuff",
            "projects",
            "posts",
            "contact",
        ]),
        shortTitle: z.string().optional(),
        headings: z
            .array(
                z.object({
                    depth: z.number(),
                    slug: z.string(),
                    text: z.string(),
                }),
            )
            .optional(),
    }),
});

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean(),
        activeNav: z.enum([
            "~",
            "about",
            "stuff",
            "projects",
            "posts",
            "contact",
        ]),
        shortTitle: z.string().optional(),
        headings: z
            .array(
                z.object({
                    depth: z.number(),
                    slug: z.string(),
                    text: z.string(),
                }),
            )
            .optional(),
    }),
});

export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
};
