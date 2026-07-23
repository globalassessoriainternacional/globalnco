import type { Lang } from '../config/site';

/**
 * Mapa canônico de rotas por idioma.
 * Fonte única de verdade para navegação, hreflang, breadcrumbs e sitemap.
 */

export type PageKey =
  | 'home'
  // países
  | 'countries'
  | 'country:uruguai'
  | 'country:chile'
  | 'country:paraguai'
  | 'compare'
  // serviços — hub
  | 'services'
  // família VIVER
  | 'svc:residencia'
  | 'svc:diplomas'
  | 'svc:cnh'
  | 'svc:instalacao'
  // família PATRIMÔNIO
  | 'svc:fiscal'
  | 'svc:tributario'
  | 'svc:patrimonial'
  | 'svc:sucessao'
  // família NEGÓCIOS
  | 'svc:empresas'
  | 'svc:incentivos'
  | 'svc:banca'
  // institucional
  | 'method'
  | 'about'
  | 'blog'
  | 'faq'
  | 'contact'
  | 'diagnostic'
  | 'privacy'
  | 'terms'
  | 'thanks';

export const ROUTES: Record<PageKey, Record<Lang, string>> = {
  home: { pt: '/', es: '/es/', en: '/en/' },

  countries: { pt: '/paises/', es: '/es/paises/', en: '/en/countries/' },
  'country:uruguai': { pt: '/uruguai/', es: '/es/uruguay/', en: '/en/uruguay/' },
  'country:chile': { pt: '/chile/', es: '/es/chile/', en: '/en/chile/' },
  'country:paraguai': { pt: '/paraguai/', es: '/es/paraguay/', en: '/en/paraguay/' },
  compare: {
    pt: '/uruguai-chile-ou-paraguai/',
    es: '/es/uruguay-chile-o-paraguay/',
    en: '/en/uruguay-chile-or-paraguay/',
  },

  services: { pt: '/servicos/', es: '/es/servicios/', en: '/en/services/' },

  // ---- VIVER
  'svc:residencia': {
    pt: '/servicos/residencia-e-vistos/',
    es: '/es/servicios/residencia-y-visados/',
    en: '/en/services/residency-and-visas/',
  },
  'svc:diplomas': {
    pt: '/servicos/revalidacao-de-diplomas/',
    es: '/es/servicios/revalidacion-de-titulos/',
    en: '/en/services/degree-recognition/',
  },
  'svc:cnh': {
    pt: '/servicos/carteira-de-motorista/',
    es: '/es/servicios/licencia-de-conducir/',
    en: '/en/services/driving-licence/',
  },
  'svc:instalacao': {
    pt: '/servicos/instalacao-e-vida/',
    es: '/es/servicios/instalacion-y-vida/',
    en: '/en/services/relocation-and-living/',
  },

  // ---- PATRIMÔNIO
  'svc:fiscal': {
    pt: '/servicos/residencia-fiscal/',
    es: '/es/servicios/residencia-fiscal/',
    en: '/en/services/tax-residency/',
  },
  'svc:tributario': {
    pt: '/servicos/planejamento-tributario/',
    es: '/es/servicios/planificacion-tributaria/',
    en: '/en/services/tax-planning/',
  },
  'svc:patrimonial': {
    pt: '/servicos/protecao-patrimonial-e-holding/',
    es: '/es/servicios/proteccion-patrimonial-y-holding/',
    en: '/en/services/wealth-protection-and-holding/',
  },
  'svc:sucessao': {
    pt: '/servicos/sucessao-e-heranca/',
    es: '/es/servicios/sucesion-y-herencia/',
    en: '/en/services/succession-and-inheritance/',
  },

  // ---- NEGÓCIOS
  'svc:empresas': {
    pt: '/servicos/empresas-e-sucursais/',
    es: '/es/servicios/empresas-y-sucursales/',
    en: '/en/services/companies-and-branches/',
  },
  'svc:incentivos': {
    pt: '/servicos/beneficios-fiscais-empresariais/',
    es: '/es/servicios/beneficios-fiscales-empresariales/',
    en: '/en/services/corporate-tax-incentives/',
  },
  'svc:banca': {
    pt: '/servicos/banca-e-contas-internacionais/',
    es: '/es/servicios/banca-y-cuentas-internacionales/',
    en: '/en/services/banking-and-accounts/',
  },

  // ---- institucional
  method: { pt: '/metodo/', es: '/es/metodo/', en: '/en/method/' },
  about: { pt: '/sobre/', es: '/es/nosotros/', en: '/en/about/' },
  blog: { pt: '/blog/', es: '/es/blog/', en: '/en/insights/' },
  faq: { pt: '/perguntas-frequentes/', es: '/es/preguntas-frecuentes/', en: '/en/faq/' },
  contact: { pt: '/contato/', es: '/es/contacto/', en: '/en/contact/' },
  diagnostic: { pt: '/diagnostico/', es: '/es/diagnostico/', en: '/en/consultation/' },
  privacy: {
    pt: '/politica-de-privacidade/',
    es: '/es/politica-de-privacidad/',
    en: '/en/privacy-policy/',
  },
  terms: { pt: '/termos-de-uso/', es: '/es/terminos-de-uso/', en: '/en/terms-of-use/' },
  thanks: { pt: '/obrigado/', es: '/es/gracias/', en: '/en/thank-you/' },
};

/** Serviços agrupados em três famílias — a estrutura que evita confusão. */
export const SERVICE_FAMILIES: { key: 'live' | 'wealth' | 'business'; services: PageKey[] }[] = [
  { key: 'live', services: ['svc:residencia', 'svc:diplomas', 'svc:cnh', 'svc:instalacao'] },
  { key: 'wealth', services: ['svc:fiscal', 'svc:tributario', 'svc:patrimonial', 'svc:sucessao'] },
  { key: 'business', services: ['svc:empresas', 'svc:incentivos', 'svc:banca'] },
];

export const ALL_SERVICES: PageKey[] = SERVICE_FAMILIES.flatMap((f) => f.services);

export const COUNTRY_KEYS: PageKey[] = ['country:uruguai', 'country:chile', 'country:paraguai'];

export function route(key: PageKey, lang: Lang): string {
  return ROUTES[key][lang];
}

export function alternatesFor(key: PageKey): Record<Lang, string> {
  return ROUTES[key];
}

/** Slug final de uma rota (para getStaticPaths). */
export function slugOf(key: PageKey, lang: Lang): string {
  const parts = ROUTES[key][lang].split('/').filter(Boolean);
  return parts[parts.length - 1];
}
