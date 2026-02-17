import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['thumbnails', 'reels', 'posters', 'logos']),
    type: z.enum(['image', 'video']),
    image: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    youtubeLink: z.string().optional(),
    rating: z.number().min(1).max(5),
    message: z.string(),
    approved: z.boolean(),
    date: z.string().optional(),
  }),
});

export const collections = {
  works: worksCollection,
  testimonials: testimonialsCollection,
};
