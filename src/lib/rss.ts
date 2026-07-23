import rss from '@astrojs/rss';
import { SITE_URL, type Lang } from '../config/site';
import { content } from '../data';
import { getPostsByLang, postUrl } from './blog';

export async function buildRss(lang: Lang) {
  const c = content[lang];
  const posts = await getPostsByLang(lang);
  return rss({
    title: `Global & Co. — ${c.blog.breadcrumb}`,
    description: c.blog.metaDescription,
    site: SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: [post.data.category, ...post.data.tags],
      author: post.data.author,
    })),
    customData: `<language>${lang === 'pt' ? 'pt-br' : lang}</language>`,
  });
}
