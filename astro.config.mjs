import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { parse } from 'yaml';
import { documentationLinks } from './scripts/documentation-links.mjs';
import { apiPresentation } from './scripts/api-presentation.mjs';
import { siteOrigin } from './scripts/site-environment.mjs';

// Keep framework route metadata small. The shared tree owns both the sidebar and
// sibling pagination, so Starlight need not rebuild the complete API tree per page.
let navigation = parse(readFileSync(new URL('./navigation/en.yml', import.meta.url), 'utf8'))
  .map(item => item.apiDirectories ? { slug: 'api', label: item.label } : item);
const plan = process.env.INNO_DOCS_PLAN ? JSON.parse(readFileSync(process.env.INNO_DOCS_PLAN, 'utf8')) : null;
if (plan?.mode === 'Incremental') {
  const routes = new Set(plan.pages.map(page => page.route));
  const filter = items => items.flatMap(item => item.items
    ? [{ ...item, items: filter(item.items) }].filter(group => group.items.length)
    : routes.has(item.slug) ? [item] : []);
  navigation = filter(navigation);
}

export default defineConfig({
  site: siteOrigin(),
  base: '/InnoEngine.Docs',
  trailingSlash: 'always',
  markdown: { processor: unified({ remarkPlugins: [apiPresentation, [documentationLinks, { contentRoot: './content/en', publicRoot: './public', base: '/InnoEngine.Docs' }]] }) },
  integrations: [
    starlight({
      pagefind: !plan || plan.search,
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
      components: { Head: './src/components/Head.astro', Pagination: './src/components/Pagination.astro', Footer: './src/components/Footer.astro', Header: './src/components/Header.astro', MarkdownContent: './src/components/MarkdownContent.astro', PageTitle: './src/components/PageTitle.astro', PageSidebar: './src/components/PageSidebar.astro', EditLink: './src/components/EditLink.astro', Sidebar: './src/components/Sidebar.astro' },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      markdown: { processedDirs: ['content/en'] },
      lastUpdated: false,
    }),
  ],
});
