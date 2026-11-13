import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { i18nLoader } from '@astrojs/starlight/loaders';
import { canonicalContentLoader } from '../scripts/canonical-content.mjs';

export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: canonicalContentLoader(),
    schema: docsSchema({
      extend: z.object({
        uid: z.string().min(1),
        kind: z.enum(['landing', 'tutorial', 'how-to', 'explanation', 'project', 'api', 'troubleshooting']),
        owners: z.array(z.string()).default([]),
        aliases: z.array(z.string()).default([]),
        contracts: z.array(z.string()).default([]),
        apiSurface: z.string().optional(),
        apiSurfaces: z.array(z.string()).optional(),
        apiScope: z.enum(['Runtime', 'Editor', 'Authoring']).optional(),
        source: z.enum(['xml', 'manual']).optional(),
        symbol: z.string().optional(),
        exampleMode: z.enum(['host', 'runtime-script', 'editor-script']).optional(),
        exampleProjects: z.array(z.string()).optional(),
      }),
    }),
  }),
};
