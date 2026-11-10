import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { i18nLoader } from '@astrojs/starlight/loaders';
import { contentEntryId } from '../scripts/documentation-routes.mjs';

export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './content/en', generateId: ({ entry }) => contentEntryId(entry) }),
    schema: docsSchema({
      extend: z.object({
        uid: z.string().min(1),
        kind: z.enum(['landing', 'tutorial', 'how-to', 'explanation', 'project', 'api', 'troubleshooting']),
        owners: z.array(z.string()).default([]),
        aliases: z.array(z.string()).default([]),
        contracts: z.array(z.string()).default([]),
        apiSurface: z.string().optional(),
        exampleMode: z.enum(['host', 'runtime-script', 'editor-script']).optional(),
        exampleProjects: z.array(z.string()).optional(),
      }),
    }),
  }),
};
