import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../config/site';
import { ROUTES } from '../i18n/routes';

export type Post = CollectionEntry<'blog'>;

/** Idioma de um post a partir do id (ex.: 'pt/meu-artigo') */
export function postLang(post: Post): Lang {
  return post.id.split('/')[0] as Lang;
}

/** Slug do post sem o prefixo de idioma */
export function postSlug(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

/** URL pública do post */
export function postUrl(post: Post): string {
  const lang = postLang(post);
  return `${ROUTES.blog[lang]}${postSlug(post)}/`;
}

/** Posts publicados de um idioma, mais recentes primeiro */
export async function getPostsByLang(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Traduções de um post (mesmo translationKey em outros idiomas) */
export async function getTranslations(post: Post): Promise<Partial<Record<Lang, string>>> {
  const key = post.data.translationKey;
  const self = { [postLang(post)]: postUrl(post) } as Partial<Record<Lang, string>>;
  if (!key) return self;
  const siblings = await getCollection(
    'blog',
    ({ data }) => data.translationKey === key && !data.draft
  );
  const map: Partial<Record<Lang, string>> = {};
  for (const p of siblings) map[postLang(p)] = postUrl(p);
  return { ...map, ...self };
}

/** Tempo de leitura estimado (~200 palavras/min) */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
