import { defineCollection, z } from 'astro:content';

const entries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'archaeology',
      'anatomy',
      'taxonomy',
      'ethology',
      'linguistics',
      'sociology',
      'ecology',
      'ethics'
    ]),
    tags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    status: z.enum(['draft', 'published']).default('draft'),
    description: z.string().optional(),
    date: z.date().optional(),
  }),
});

export const collections = { entries };
