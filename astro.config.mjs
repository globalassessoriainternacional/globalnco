// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://globalnco.com';

function seoWeight(url) {
  const p = url.replace(SITE, '').replace(/\/$/, '') || '/';
  if (p === '/') return { priority: 1.0, changefreq: 'weekly' };
  if (p === '/blog') return { priority: 0.9, changefreq: 'daily' };
  if (p.startsWith('/blog/')) return { priority: 0.7, changefreq: 'monthly' };
  if (['/uruguai', '/chile', '/paraguai'].includes(p)) return { priority: 0.95, changefreq: 'monthly' };
  if (p === '/uruguai-chile-ou-paraguai') return { priority: 0.9, changefreq: 'monthly' };
  if (p.startsWith('/servicos/')) return { priority: 0.85, changefreq: 'monthly' };
  if (['/servicos', '/paises', '/diagnostico'].includes(p)) return { priority: 0.9, changefreq: 'monthly' };
  if (['/metodo', '/sobre', '/contato', '/perguntas-frequentes'].includes(p)) return { priority: 0.7, changefreq: 'monthly' };
  return { priority: 0.3, changefreq: 'yearly' };
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  compressHTML: true,
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/obrigado') &&
        !page.includes('/404') &&
        !page.includes('/es/') &&
        !page.includes('/en/') &&
        !/\/(es|en)$/.test(page.replace(/\/$/, '')),
      serialize: (item) => ({ ...item, ...seoWeight(item.url), lastmod: new Date().toISOString() }),
    }),
  ],
});
