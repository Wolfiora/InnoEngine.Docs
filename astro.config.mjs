import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { parse } from 'yaml';
import { documentationLinks } from './scripts/documentation-links.mjs';
import { apiPresentation } from './scripts/api-presentation.mjs';
import { siteOrigin } from './scripts/site-environment.mjs';

// Framework navigation supplies tutorial pagination only. The shared sidebar owns
// the complete API tree, so Starlight need not rebuild that tree for every page.
const navigation = parse(readFileSync(new URL('./navigation/en.yml', import.meta.url), 'utf8'))
  .map(item => item.apiDirectories ? { slug: 'api', label: item.label } : item);

export default defineConfig({
  site: siteOrigin(),
  base: '/InnoEngine.Docs',
  trailingSlash: 'always',
  markdown: { processor: unified({ remarkPlugins: [apiPresentation, [documentationLinks, { contentRoot: './content/en', publicRoot: './public', base: '/InnoEngine.Docs' }]] }) },
  integrations: [
    starlight({
      title: 'InnoEngine',
      description: 'The InnoEngine manual, architecture, extension guides, and API reference.',
      logo: { src: './public/branding/logo.svg', replacesTitle: false },
      favicon: '/branding/logo.svg',
      defaultLocale: 'en',
      locales: { root: { label: 'English', lang: 'en' } },
      social: [{ icon: 'github', label: 'InnoEngine on GitHub', href: 'https://github.com/Wolfiora/InnoEngine' }],
      editLink: { baseUrl: 'https://github.com/Wolfiora/InnoEngine.Docs/edit/draft/' },
      sidebar: navigation,
      customCss: ['./src/styles/documentation.css'],
      components: { PageTitle: './src/components/PageTitle.astro', PageSidebar: './src/components/PageSidebar.astro', EditLink: './src/components/EditLink.astro', Sidebar: './src/components/Sidebar.astro' },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      markdown: { processedDirs: ['content/en'] },
      lastUpdated: false,
    }),
  ],
});
