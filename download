# Manual completo — globalnco.com

Guia definitivo de publicação, operação e crescimento do site da Global & Co.
Custo mensal de tudo o que está aqui: **R$ 0** (você paga apenas a renovação anual do domínio).

---

## Visão geral da arquitetura

| Camada | Ferramenta | Custo | Função |
| --- | --- | --- | --- |
| Código-fonte | GitHub (repositório privado) | R$ 0 | Versionamento + backup + gatilho de publicação |
| Build + Hospedagem | Cloudflare Pages | R$ 0 | Compila o Astro e serve o site em CDN global |
| DNS + CDN + E-mail | Cloudflare (plano Free) | R$ 0 | Aponta o domínio, HTTPS, cache, e-mail `contato@` |
| Gerador do site | Astro (open source) | R$ 0 | Transforma conteúdo em HTML estático ultrarrápido |

Fluxo de publicação: **você altera um arquivo → commit no GitHub → Cloudflare recompila e publica em ~1 minuto.** Sem servidor, sem WordPress, sem plugin, sem mensalidade.

---

## PARTE 1 — Publicar o site pela primeira vez

### 1.1 Criar as contas (se ainda não tiver)

1. **GitHub** — https://github.com/signup (plano Free).
2. **Cloudflare** — https://dash.cloudflare.com/sign-up (plano Free).

### 1.2 Subir o código para o GitHub

Pelo navegador (sem instalar nada):

1. GitHub → **New repository** → nome `globalnco-site` → **Private** → Create.
2. Na página do repositório vazio, clique em **uploading an existing file**.
3. Arraste TODO o conteúdo da pasta `globalnco-site` (exceto as pastas `node_modules` e `dist`, se existirem).
4. Clique em **Commit changes**.

> Alternativa (recomendada a médio prazo): instalar o [GitHub Desktop](https://desktop.github.com) — arrastar a pasta e clicar em "Publish". Facilita todas as atualizações futuras.

### 1.3 Conectar o Cloudflare Pages

1. Painel Cloudflare → **Workers & Pages** → **Create** → aba **Pages** → **Connect to Git**.
2. Autorize o GitHub e selecione o repositório `globalnco-site`.
3. Configurações de build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Clique em **Save and Deploy**. Em ~1 minuto o site estará no ar em `globalnco-site.pages.dev`.

### 1.4 Conectar o domínio globalnco.com

1. Painel Cloudflare → **Add a domain** → digite `globalnco.com` → plano **Free**.
2. O Cloudflare mostrará **2 nameservers** (ex.: `ana.ns.cloudflare.com` / `bob.ns.cloudflare.com`).
3. No site onde você registrou o domínio (Registro.br, GoDaddy etc.), troque os nameservers pelos indicados. Propagação: minutos a 24 h.
4. De volta ao Cloudflare: **Workers & Pages → globalnco-site → Custom domains → Set up a custom domain** → `globalnco.com` (e depois adicione também `www.globalnco.com`).
5. HTTPS é ativado automaticamente. O arquivo `_redirects` já envia `www` → domínio principal.

### 1.5 Ativar o e-mail contato@globalnco.com (grátis)

1. Cloudflare → seu domínio → **Email → Email Routing → Enable**.
2. **Create address** → `contato` → destino: seu Gmail → confirme o e-mail de verificação.
3. Pronto: tudo que chegar em `contato@globalnco.com` cai na sua caixa Gmail.
4. (Opcional) Para *enviar* como contato@: Gmail → Configurações → Contas → "Enviar e-mail como".

---

## PARTE 2 — Google, Bing e Analytics

### 2.1 Google Search Console (indexação)

1. https://search.google.com/search-console → **Adicionar propriedade** → tipo **Domínio** → `globalnco.com`.
2. O Google pede um registro TXT → no Cloudflare: **DNS → Add record → TXT** → cole o valor → Verify.
3. Após verificar: menu **Sitemaps** → enviar `https://globalnco.com/sitemap-index.xml`.
4. Use **Inspeção de URL** para pedir indexação imediata da home e das páginas de serviço.

### 2.2 Google Analytics 4

1. https://analytics.google.com → criar conta → propriedade **globalnco.com** → obtenha o ID `G-XXXXXXXXXX`.
2. No projeto, abra `src/config/site.ts` e preencha:
   ```ts
   export const GA_ID = 'G-XXXXXXXXXX';
   ```
3. Commit → deploy automático. O site já vem com **banner de consentimento LGPD/GDPR**: o GA só carrega se o visitante aceitar (Consent Mode v2, IP anonimizado).

### 2.3 Bing Webmaster Tools

1. https://www.bing.com/webmasters → **Importar do Google Search Console** (1 clique) → sitemap importado junto. Cobre Bing, Copilot, DuckDuckGo e Yahoo.

### 2.4 Google Business Profile (SEO Local)

Como a atuação é online (sem endereço público):

1. https://business.google.com → criar perfil **"Global & Co."** → categoria sugerida: **"Consultoria"** / "Consultor de imigração e naturalização".
2. Em "Você atende os clientes fora do seu endereço?" → **Sim** → cadastre **áreas de atendimento** (Uruguai; principais cidades do Brasil) e **oculte o endereço** (perfil de área de serviço — prática correta do Google para negócios sem loja física).
3. Preencha: site `https://globalnco.com`, WhatsApp +598 91 338 995, horário Seg–Sex 9h–18h, descrição (use o parágrafo da página Sobre), logo e capa (use `/public/icons/icon-512.png` e a arte OG de `/public/og/`).
4. **Consistência NAP**: use sempre exatamente o mesmo nome, telefone e site em qualquer diretório. O schema `ProfessionalService` do site já espelha esses dados.
5. Publique 1 post por semana no perfil (pode reaproveitar os artigos do blog) e responda todas as avaliações.

---

## PARTE 3 — Operação diária

### 3.1 Publicar um artigo no blog (rotina diária)

Um artigo = **1 arquivo Markdown**. Caminhos:

```
src/content/blog/pt/meu-artigo.md
src/content/blog/es/mi-articulo.md
src/content/blog/en/my-article.md
```

Modelo pronto (copie de um artigo existente):

```markdown
---
title: 'Título do artigo (até ~65 caracteres)'
description: 'Meta description persuasiva de até 160 caracteres.'
pubDate: 2026-07-25
author: 'Global & Co.'
category: 'Residência'
tags: ['uruguai', 'residência']
translationKey: 'meu-artigo-2026'   # mesmo valor nas 3 línguas (liga o hreflang)
---

Texto em Markdown. Subtítulos com ##, listas, tabelas e links internos:
[Residência & Migração](/servicos/residencia-e-migracao/).
```

Como publicar **pelo navegador**: GitHub → pasta `src/content/blog/pt/` → **Add file → Create new file** → cole o conteúdo → **Commit**. Em ~1 minuto está no ar, com URL amigável, Open Graph, Schema Article, breadcrumbs, data, tempo de leitura, RSS e sitemap — tudo automático.

> Dica de produtividade: peça ao Claude "escreva o artigo X no formato do blog da Global & Co. nos 3 idiomas" e cole os 3 arquivos.

O nome do arquivo vira a URL (`meu-artigo.md` → `/blog/meu-artigo/`). Use minúsculas e hífens.
Para **imagem destacada**: suba o arquivo em `public/blog/` e adicione `image: '/blog/nome.webp'` + `imageAlt: 'descrição'` no cabeçalho.

### 3.2 Alterar textos das páginas

Todo o conteúdo editorial está em 3 arquivos espelhados:

- `src/data/pt.ts` (português)
- `src/data/es.ts` (espanhol)
- `src/data/en.ts` (inglês)

Edite o texto entre aspas, commit, pronto. **Nunca** apague as vírgulas/aspas da estrutura.

### 3.3 Alterar contatos, WhatsApp, Instagram, formulário

Arquivo único: `src/config/site.ts` (número do WhatsApp, mensagens pré-preenchidas, e-mail, handles, GA4, formulário).

### 3.4 Ativar o formulário de contato (opcional, grátis)

O site já traz um formulário completo pronto. Para ativá-lo:

1. Crie conta gratuita no https://formspree.io (50 envios/mês) ou https://web3forms.com (250/mês).
2. Copie a URL do endpoint (ex.: `https://formspree.io/f/abcd1234`).
3. Em `src/config/site.ts`: `export const FORM_ENDPOINT = 'https://formspree.io/f/abcd1234';`
4. Commit. Enquanto vazio, a página de contato exibe os canais diretos (WhatsApp/e-mail) — nada quebra.

### 3.5 Adicionar imagens

1. Salve em `public/` (ex.: `public/blog/foto.webp`).
2. Prefira **WebP** ≤ 200 KB (converta grátis em https://squoosh.app).
3. Referencie como `/blog/foto.webp` e **sempre** preencha o texto alternativo.

### 3.6 Backup

- O GitHub **é** o backup contínuo (todo o histórico de versões, para sempre).
- Extra mensal: repositório → **Code → Download ZIP** → guarde no seu drive.
- O site publicado é 100% regenerável a partir do repositório.

### 3.7 Atualizar dependências (a cada ~6 meses)

Com Node instalado: `npm update && npm run build` → se o build passar, commit. (Ou peça ao Claude.)

---

## PARTE 4 — SEO contínuo: rotina de crescimento

**Semanal**

- Publicar no mínimo 2–3 artigos por idioma (o ideal da sua meta: 1/dia, sempre com `translationKey` ligando as 3 línguas).
- Google Search Console → **Desempenho**: veja quais consultas geram impressões e crie conteúdo sobre elas.
- 1 post no Google Business Profile + responder avaliações.

**Mensal**

- GSC → **Páginas não indexadas**: corrigir o que aparecer.
- Atualizar 1 artigo antigo (o Google valoriza `updatedDate` — adicione no cabeçalho).
- Conferir Core Web Vitals no GSC (a arquitetura já entrega excelente; monitorar apenas).
- Testar rich results: https://search.google.com/test/rich-results (cole URLs de serviço e artigos).

**O que já está implementado e você não precisa tocar**

SEO on-page (títulos, descriptions, headings, URLs), SEO técnico (canonical, sitemap, robots, 404, redirects www), SEO internacional (hreflang recíproco PT/ES/EN + x-default), dados estruturados (Organization/ProfessionalService, WebSite, Service, FAQPage, BlogPosting, BreadcrumbList, ContactPage, AboutPage, ItemList), Open Graph + Twitter Cards com arte própria por idioma, RSS por idioma, favicons/manifest/PWA-ready, headers de segurança OWASP, LGPD/GDPR (política + banner de consentimento + GA condicionado), performance (zero JavaScript de framework, fontes self-hosted com preload, CSS mínimo, cache imutável).

**AEO/GEO (mecanismos de IA)** — também pronto: `robots.txt` liberando GPTBot, ClaudeBot, PerplexityBot, Google-Extended e demais; `llms.txt` descrevendo a empresa; FAQs com schema (formato preferido das respostas de IA); conteúdo com respostas diretas e factuais.

---

## PARTE 5 — Solução de problemas

| Sintoma | Causa provável | Solução |
| --- | --- | --- |
| Deploy falhou no Cloudflare | Erro de sintaxe em arquivo editado | Abra o log do deploy; desfaça o último commit no GitHub (History → Revert) |
| Artigo não apareceu | Frontmatter inválido (aspas/datas) | Compare com um artigo existente; datas no formato `2026-07-25` |
| Site fora do ar após trocar DNS | Propagação em andamento | Aguarde até 24 h; verifique Custom domains no Pages |
| E-mail contato@ não chega | Email Routing não verificado | Cloudflare → Email Routing → reenviar verificação |
| Mudança não aparece | Cache do navegador | Ctrl+F5; confira se o deploy terminou no painel Pages |

---

## Checklist de lançamento

- [ ] Repositório no GitHub criado e código enviado
- [ ] Cloudflare Pages conectado e primeiro deploy verde
- [ ] Domínio apontado (nameservers) + custom domain no Pages (apex e www)
- [ ] Email Routing ativo (contato@globalnco.com)
- [ ] Search Console verificado + sitemap enviado
- [ ] GA4 criado e `GA_ID` preenchido
- [ ] Bing Webmaster importado do GSC
- [ ] Google Business Profile criado (área de serviço, sem endereço)
- [ ] Teste no celular: navegação, WhatsApp, seletor de idiomas
- [ ] Rich Results Test em 1 página de serviço e 1 artigo
