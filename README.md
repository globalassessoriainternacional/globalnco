# Global & Co. — globalnco.com

Site institucional multilíngue (PT/ES/EN) construído com [Astro](https://astro.build), hospedado gratuitamente no Cloudflare Pages.

> **Documentação completa de publicação, domínio, SEO e manutenção:** veja a pasta [`docs/`](./docs/) — comece por `docs/MANUAL.md`.

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala as dependências |
| `npm run dev` | Ambiente local em `http://localhost:4321` |
| `npm run build` | Gera o site estático em `./dist/` |
| `npm run preview` | Pré-visualiza o build local |

## Estrutura

```
src/
├── config/site.ts        ← DADOS CENTRAIS: domínio, WhatsApp, e-mail, GA4, formulário
├── i18n/routes.ts        ← Mapa de URLs por idioma (hreflang/nav)
├── i18n/ui.ts            ← Textos de interface por idioma
├── data/pt.ts | es.ts | en.ts ← TODO o conteúdo editorial das páginas
├── content/blog/pt|es|en ← Artigos do blog (Markdown)
├── templates/            ← Layout de cada tipo de página (compartilhado pelos 3 idiomas)
├── components/           ← Header, Footer, FAQ, CTA, Consent, etc.
├── layouts/Base.astro    ← <head> com SEO completo (meta, OG, hreflang, JSON-LD, GA4)
└── pages/                ← Rotas (PT na raiz, /es e /en)
public/
├── _headers              ← Headers de segurança (Cloudflare Pages)
├── robots.txt            ← Inclui crawlers de IA (AEO/GEO)
├── llms.txt              ← Resumo para mecanismos de IA
├── icons/ · og/          ← Favicons e imagens Open Graph
└── manifest.webmanifest
```

## Onde alterar o quê

| Quero mudar… | Arquivo |
| --- | --- |
| WhatsApp, e-mail, Instagram, GA4, formulário | `src/config/site.ts` |
| Textos de qualquer página | `src/data/pt.ts`, `es.ts`, `en.ts` |
| Publicar artigo no blog | criar `.md` em `src/content/blog/<idioma>/` |
| Cores e tipografia | `src/styles/global.css` (variáveis no topo) |
| URLs/slugs | `src/i18n/routes.ts` |

## Publicação

Deploy automático: qualquer commit na branch `main` dispara build no Cloudflare Pages (~1 min). Passo a passo completo em `docs/MANUAL.md`.
