import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog multilíngue.
 * Estrutura: src/content/blog/<idioma>/<slug>.md
 * Idiomas: pt | es | en
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70, 'Título ideal: até 70 caracteres (SEO)'),
    description: z.string().max(180, 'Description ideal: até 160–180 caracteres (SEO)'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Global & Co.'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    /** Caminho da imagem destacada em /public (ex.: /blog/minha-imagem.webp) */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Mesmo valor nas 3 versões do artigo para ligar PT/ES/EN (hreflang) */
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
