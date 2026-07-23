export interface FaqItem { q: string; a: string }
export interface TitledItem { t: string; d: string }

/** Página de serviço — molde derivado das melhores práticas dos 14 concorrentes */
export interface ServiceContent {
  nav: string;              // nome curto (menu, cards)
  title: string;            // H1
  metaTitle: string;
  metaDescription: string;
  excerpt: string;          // 1 linha (cards)
  lede: string;             // parágrafo de abertura
  forWho: { title: string; items: string[] };
  fit: { title: string; yes: string[]; no: string[] };      // quando faz / não faz sentido
  deliver: { title: string; items: TitledItem[] };          // o que você recebe
  process: { title: string; note: string; items: TitledItem[] }; // logística do cliente
  included: { title: string; items: string[] };             // tradutor, motorista, etc.
  continuity: { title: string; text: string };              // o "depois"
  faqs: FaqItem[];
  cta: { title: string; text: string };
  countries: string[];      // em quais países é oferecido
}

export interface CountryContent {
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;          // frase de posicionamento
  lede: string;
  highlights: TitledItem[]; // 4 razões
  indicators: { label: string; value: string; source: string }[];
  forWho: { title: string; items: string[] };
  services: { title: string; text: string };
  reality: { title: string; text: string; items: string[] }; // o que o país NÃO é
  faqs: FaqItem[];
  cta: { title: string; text: string };
}

export interface LegalBlock { h?: string; p?: string; ul?: string[] }

export interface Content {
  common: {
    serviceFamilies: Record<'live' | 'wealth' | 'business', { name: string; desc: string }>;
    breadcrumbHome: string;
    legalNav: { privacy: string; terms: string };
  };

  home: {
    metaTitle: string;
    metaDescription: string;
    hero: { eyebrow: string; title1: string; title2: string; lede: string; badges: string[] };
    countries: { eyebrow: string; title: string; lede: string };
    pains: { eyebrow: string; title: string; lede: string; items: TitledItem[] };
    services: { eyebrow: string; title: string; lede: string };
    method: { eyebrow: string; title: string; lede: string; steps: TitledItem[] };
    included: { eyebrow: string; title: string; lede: string; items: TitledItem[] };
    positioning: { eyebrow: string; title: string; text: string; quote: string };
    review: { eyebrow: string; title: string; text: string; cta: string };
    blog: { eyebrow: string; title: string; lede: string };
    cta: { title: string; text: string; note: string };
  };

  countriesIndex: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string; compareCta: string;
  };

  countries: Record<string, CountryContent>;

  compare: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    intro: string;
    tableTitle: string;
    criteria: { label: string; uy: string; cl: string; py: string }[];
    profiles: { title: string; items: TitledItem[] };
    warning: { title: string; text: string };
    cta: { title: string; text: string };
  };

  servicesIndex: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
  };

  services: Record<string, ServiceContent>;

  method: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    steps: (TitledItem & { detail: string })[];
    included: { title: string; lede: string; items: TitledItem[] };
    principles: { title: string; items: TitledItem[] };
    cta: { title: string; text: string };
  };

  about: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    story: string[];
    principles: { eyebrow: string; title: string; items: TitledItem[] };
    coverage: { eyebrow: string; title: string; text: string; items: TitledItem[] };
    transparency: { title: string; text: string };
    cta: { title: string; text: string };
  };

  diagnostic: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    what: { title: string; items: string[] };
    how: { title: string; items: TitledItem[] };
    form: {
      title: string; intro: string;
      step1: string; step2: string;
      name: string; email: string; phone: string;
      country: string; countryOptions: { value: string; label: string }[];
      service: string; serviceOptions: string[];
      profile: string; profileOptions: string[];
      message: string;
      consent: string;
      submit: string; sending: string;
      or: string;
    };
    commitments: { title: string; items: string[] };
  };

  faqPage: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    groups: { name: string; faqs: FaqItem[] }[];
    cta: { title: string; text: string };
  };

  contact: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    channels: { key: string; t: string; d: string; email: string }[];
    hours: { t: string; d: string };
    coverage: string;
    directNote: string;
  };

  blog: {
    metaTitle: string; metaDescription: string; breadcrumb: string;
    title: string; lede: string;
    readingTime: string; by: string; published: string; updated: string;
    related: string; back: string; all: string;
  };

  thanks: { metaTitle: string; title: string; text: string; next: string; back: string };

  privacy: { metaTitle: string; title: string; updated: string; blocks: LegalBlock[] };
  terms: { metaTitle: string; title: string; updated: string; blocks: LegalBlock[] };
}
