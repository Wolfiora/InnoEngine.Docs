import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { i18nLoader } from '@astrojs/starlight/loaders';

export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './content/en' }),
    schema: docsSchema({
      extend: z.object({
        uid: z.string().min(1),
        kind: z.enum(['landing', 'tutorial', 'how-to', 'explanation', 'project', 'api', 'troubleshooting']),
        owners: z.array(z.string()).default([]),
        aliases: z.array(z.string()).default([]),
        contracts: z.array(z.string()).default([]),
        apiSurface: z.string().optional(),
      }),
    }),
  }),
};
