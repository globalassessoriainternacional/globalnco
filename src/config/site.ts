/**
 * ============================================================
 * CONFIGURAÇÃO CENTRAL — GLOBAL & CO.
 * Altere aqui e o site inteiro é atualizado.
 * ============================================================
 */

export const SITE_URL = 'https://globalnco.com';

/* ------------------------------------------------------------------
 * 1. ANALYTICS E RASTREAMENTO
 * ------------------------------------------------------------------ */

/** Google Analytics 4 (formato G-XXXXXXXXXX). Vazio = desativado. */
export const GA_ID = '';

/** Google Tag Manager (formato GTM-XXXXXXX). Vazio = desativado.
 *  Use GTM se quiser gerenciar pixels (Meta, LinkedIn) sem mexer no código. */
export const GTM_ID = '';

/** Meta Pixel (Facebook/Instagram). Vazio = desativado. */
export const META_PIXEL_ID = '';

/* ------------------------------------------------------------------
 * 2. CAPTURA DE LEADS
 * ------------------------------------------------------------------ */

/**
 * Endpoint do formulário. Opções gratuitas recomendadas:
 *  · Formspree     → https://formspree.io/f/XXXXXXX   (50 envios/mês grátis)
 *  · Web3Forms     → https://api.web3forms.com/submit (250/mês grátis)
 *  · Make/Zapier   → webhook que grava direto no seu CRM
 *  · n8n próprio   → webhook self-hosted
 *
 * Enquanto vazio, o formulário exibe os canais diretos (WhatsApp/e-mail)
 * e nenhum campo é perdido — o site não quebra.
 */
export const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

/** Chave de acesso do Web3Forms (só se usar Web3Forms). */
export const WEB3FORMS_KEY = '3882bdf1-3c00-46f7-903f-6cf7eac7d95f';

/**
 * Campos capturados automaticamente em TODO envio de formulário.
 * Já vêm prontos para alimentar um CRM (RD Station, HubSpot, Pipedrive, Notion…).
 */
export const LEAD_TRACKING_FIELDS = [
  'lead_origem_pagina',   // URL da página onde o lead preencheu
  'lead_idioma',          // pt | es | en
  'lead_pais_interesse',  // uruguai | chile | paraguai | indefinido
  'lead_servico',         // serviço selecionado no formulário
  'lead_perfil',          // faixa/perfil declarado
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',                // Google Ads
  'fbclid',               // Meta Ads
  'referrer',             // de onde veio
  'primeiro_acesso',      // data do 1º acesso (atribuição)
  'dispositivo',
] as const;

/** Página de agradecimento (após envio bem-sucedido). */
export const THANK_YOU_PATH = { pt: '/obrigado/', es: '/es/gracias/', en: '/en/thank-you/' };

/* ------------------------------------------------------------------
 * 3. IDENTIDADE E CONTATO
 * ------------------------------------------------------------------ */

export const BRAND = {
  name: 'Global & Co.',
  legalName: 'Global & Co.',

  /** ⚠ PREENCHER: razão social completa, país e número de registro.
   *  Publicar isso é a prova de credibilidade nº 1 identificada nas 14 análises. */
  registry: {
    show: false,                 // mude para true quando preencher
    legalEntity: '',             // ex.: 'Global & Co. Asesores S.A.S.'
    country: '',                 // ex.: 'Uruguai'
    number: '',                  // ex.: 'RUT 21XXXXXXXXXX'
    verifyUrl: '',               // link público de consulta, se houver
    address: '',                 // endereço, se puder ser publicado
  },

  whatsappNumber: '59891338995',
  whatsappDisplay: '+598 91 338 995',

  /** Caixas de e-mail por finalidade — usadas nas páginas certas. */
  emails: {
    contact: 'contact@globalnco.com',
    finance: 'finance@globalnco.com',
    legal: 'legal@globalnco.com',
    support: 'support@globalnco.com',
    partnerships: 'partnerships@globalnco.com',
  },

  /** Horário de atendimento (GMT-3). */
  hours: { from: '09:00', to: '18:00', days: 'Mon-Fri' },
} as const;

export type Lang = 'pt' | 'es' | 'en';

/**
 * Idiomas ATIVOS no build.
 * PT completo. Para ativar ES/EN: crie src/data/es|en espelhando src/data/pt
 * e mude para ['pt', 'es', 'en'] — hreflang, seletor e sitemap se ajustam sozinhos.
 */
export const LANGS: Lang[] = ['pt', 'es', 'en'];

export const LOCALE_TAGS: Record<Lang, string> = { pt: 'pt-BR', es: 'es', en: 'en' };
export const OG_LOCALES: Record<Lang, string> = { pt: 'pt_BR', es: 'es_ES', en: 'en_US' };

/** Marca editorial por idioma. */
export const BRAND_BY_LANG: Record<Lang, { tagline: string; handle: string; instagram: string }> = {
  pt: { tagline: 'Pense Global', handle: '@penseglobal_pt', instagram: 'https://www.instagram.com/penseglobal_pt/' },
  es: { tagline: 'Piensa Global', handle: '@piensaglobal', instagram: 'https://www.instagram.com/piensaglobal/' },
  en: { tagline: 'Think Global', handle: '@globalnco', instagram: 'https://www.instagram.com/globalnco/' },
};

/* ------------------------------------------------------------------
 * 4. PAÍSES ATENDIDOS
 * ------------------------------------------------------------------ */

export type CountryKey = 'uruguai' | 'chile' | 'paraguai';
export const COUNTRIES: CountryKey[] = ['uruguai', 'chile', 'paraguai'];

/* ------------------------------------------------------------------
 * 5. PROVA SOCIAL — só publica o que for verdadeiro
 * ------------------------------------------------------------------ */

/**
 * ⚠ Enquanto `show: false`, a seção inteira NÃO aparece no site.
 * Seção ausente é neutra; seção com número inventado destrói a marca.
 */
export const PROOF = {
  stats: {
    show: false,
    items: [
      { value: '', label: 'Anos de atuação' },
      { value: '', label: 'Processos conduzidos' },
      { value: '', label: 'Países' },
      { value: '', label: 'Taxa de êxito' },
    ],
  },
  testimonials: {
    show: false,
    /** Formato discreto para alto patrimônio: perfil em vez de nome completo.
     *  Ex.: { quote: '…', profile: 'Empresário do agronegócio', route: 'SP → Punta del Este' } */
    items: [] as { quote: string; profile: string; route: string }[],
  },
  press: { show: false, items: [] as { name: string; url: string }[] },
  googleReviews: { show: false, url: '', rating: '', count: '' },
} as const;

/* ------------------------------------------------------------------
 * 6. UTILITÁRIOS
 * ------------------------------------------------------------------ */

export const WA_MESSAGES: Record<Lang, Record<string, string>> = {
  pt: {
    default: 'Olá! Vim pelo site da Global & Co. e gostaria de falar com um especialista.',
    diagnostic: 'Olá! Gostaria de solicitar o diagnóstico do meu caso com a Global & Co.',
    uruguai: 'Olá! Tenho interesse no Uruguai e gostaria de entender as opções para o meu caso.',
    chile: 'Olá! Tenho interesse no Chile e gostaria de entender as opções para o meu caso.',
    paraguai: 'Olá! Tenho interesse no Paraguai e gostaria de entender as opções para o meu caso.',
    review: 'Olá! Já moro no exterior e gostaria de uma revisão da minha estrutura atual.',
  },
  es: {
    default: '¡Hola! Vengo del sitio de Global & Co. y quisiera hablar con un especialista.',
    diagnostic: '¡Hola! Quisiera solicitar el diagnóstico de mi caso con Global & Co.',
    uruguai: '¡Hola! Me interesa Uruguay y quisiera entender las opciones para mi caso.',
    chile: '¡Hola! Me interesa Chile y quisiera entender las opciones para mi caso.',
    paraguai: '¡Hola! Me interesa Paraguay y quisiera entender las opciones para mi caso.',
    review: '¡Hola! Ya vivo en el exterior y quisiera una revisión de mi estructura actual.',
  },
  en: {
    default: 'Hello! I found Global & Co. online and would like to speak with a specialist.',
    diagnostic: 'Hello! I would like to request a diagnosis of my case with Global & Co.',
    uruguai: 'Hello! I am interested in Uruguay and would like to understand my options.',
    chile: 'Hello! I am interested in Chile and would like to understand my options.',
    paraguai: 'Hello! I am interested in Paraguay and would like to understand my options.',
    review: 'Hello! I already live abroad and would like a review of my current structure.',
  },
};

export function waLink(lang: Lang, context: string = 'default'): string {
  const msg = WA_MESSAGES[lang][context] ?? WA_MESSAGES[lang].default;
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}
