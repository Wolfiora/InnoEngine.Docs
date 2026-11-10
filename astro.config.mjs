import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { parse } from 'yaml';
import { documentationLinks } from './scripts/documentation-links.mjs';

const navigation = parse(readFileSync(new URL('./navigation/en.yml', import.meta.url), 'utf8'));

export default defineConfig({
  site: 'https://wolfiora.github.io',
  base: '/InnoEngine.Docs',
  trailingSlash: 'always',
  markdown: { processor: unified({ remarkPlugins: [[documentationLinks, { contentRoot: './content/en', publicRoot: './public', base: '/InnoEngine.Docs' }]] }) },
  integrations: [
    starlight({
      title: 'InnoEngine',
      description: 'The InnoEngine manual, architecture, extension guides, and API reference.',
      logo: { src: './public/branding/logo.svg', replacesTitle: false },
      favicon: '/branding/logo.svg',
      defaultLocale: 'en',
      locales: { root: { label: 'English', lang: 'en' } },
      social: [{ icon: 'github', label: 'InnoEngine on GitHub', href: 'https://github.com/Wolfiora/InnoEngine' }],
      editLink: { baseUrl: 'https://github.com/Wolfiora/InnoEngine.Docs/edit/main/' },
      sidebar: navigation,
      customCss: ['./src/styles/documentation.css'],
      components: { PageTitle: './src/components/PageTitle.astro', EditLink: './src/components/EditLink.astro' },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      markdown: { processedDirs: ['content/en'] },
      lastUpdated: false,
    }),
  ],
});
