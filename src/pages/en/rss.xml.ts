import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostsByLang, postUrl } from '../../lib/blog';
import { content } from '../../data';
export async function GET(context: APIContext) {
  const posts = await getPostsByLang('en');
  return rss({
    title: content.en.blog.metaTitle,
    description: content.en.blog.metaDescription,
    site: context.site?.toString() ?? 'https://globalnco.com',
    items: posts.map((p) => ({
      title: p.data.title, description: p.data.description,
      pubDate: p.data.pubDate, link: postUrl(p),
    })),
    customData: `<language>en</language>`,
  });
}
