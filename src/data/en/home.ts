import type { Content } from '../types';

export const common: Content['common'] = {
  serviceFamilies: {
    live: {
      name: 'Living',
      desc: 'Residency, documents and practical life at your destination — for you and your family.',
    },
    wealth: {
      name: 'Wealth',
      desc: 'Tax residency, tax planning, asset protection and succession.',
    },
    business: {
      name: 'Business',
      desc: 'Companies, branches, incentive regimes and international banking structure.',
    },
  },
  breadcrumbHome: 'Home',
  legalNav: { privacy: 'Privacy Policy', terms: 'Terms of Use' },
};

export const home: Content['home'] = {
  metaTitle: 'Living and investing in Uruguay, Chile & Paraguay | Global & Co.',
  metaDescription:
    'Boutique advisory for high-net-worth families and entrepreneurs: residency, taxation, asset protection, succession and companies in Uruguay, Chile and Paraguay.',

  hero: {
    eyebrow: 'Uruguay · Chile · Paraguay',
    title1: 'Live and invest',
    title2: 'without borders.',
    lede: 'We structure the life, wealth and business of international families in South America — with absolute discretion, local presence and structures that hold up before any authority.',
    badges: [
      'Three countries, one strategy',
      'From diagnosis to continuity',
      'Boutique — few clients at a time',
      'Confidentiality and technical rigor',
    ],
  },

  countries: {
    eyebrow: 'Where we operate',
    title: 'Three countries. One decision that has to be right.',
    lede: 'Each jurisdiction serves a different objective. We compare candidly and recommend the one that makes sense for your case — even when it is not the obvious one.',
  },

  pains: {
    eyebrow: 'The challenge',
    title: 'Moving countries cannot be a leap in the dark.',
    lede: 'The families who come to us rarely lack information. They have too much of it — and no reliable sequence to act on.',
    items: [
      {
        t: 'The wrong order is costly',
        d: 'Residency, taxation, wealth and tax exit must happen in a specific sequence. Reversing the steps produces a cost that only surfaces years later.',
      },
      {
        t: 'Off-the-shelf structures',
        d: 'Replicated models that ignore your case, outdated against the 2024–2026 changes — and that fail to protect what they promise to protect.',
      },
      {
        t: 'No one handles the "after"',
        d: 'Most advisories end at approval. The obligations that continue, the renewals and the law that changes are left to you.',
      },
    ],
  },

  services: {
    eyebrow: 'What we do',
    title: 'Eleven fronts. One structure designed for you.',
    lede: 'Organized into three families, so you find what you need without crossing a maze.',
  },

  method: {
    eyebrow: 'How we work',
    title: 'The Global & Co. Method',
    lede: 'Four stages. The fourth is the one almost no one in the market offers.',
    steps: [
      {
        t: 'Diagnosis',
        d: 'We understand your objective, your wealth and your current situation before any recommendation.',
      },
      {
        t: 'Design',
        d: 'You receive the strategy in writing: country, structure, sequence, costs and risks — including what we do not recommend.',
      },
      {
        t: 'Execution',
        d: 'We conduct every stage with a local team, translator and in-person support. You never face a counter alone.',
      },
      {
        t: 'Continuity',
        d: 'Once complete: renewals, annual obligations and structure review when the law changes.',
      },
    ],
  },

  included: {
    eyebrow: 'Premium service',
    title: 'What is included when you work with us',
    lede: 'We do not sell paperwork. We conduct the entire experience — from the first document to your life fully settled.',
    items: [
      { t: 'Dedicated consultant', d: 'One point of contact from start to finish. No call center, no retelling your story.' },
      { t: 'Accompanying translator', d: 'Present where language matters: meetings, notaries, banks and institutions.' },
      { t: 'In-person support', d: 'Our local team is with you at the stages that require physical presence.' },
      { t: 'Logistical support', d: 'Transport, scheduling and itinerary organized so every trip is used to the fullest.' },
      { t: 'Coordination of specialists', d: 'Local lawyers, accountants and notaries coordinated by us — a single point of contact.' },
      { t: 'Secure channel for documents', d: 'Your sensitive data does not travel over ordinary email.' },
    ],
  },

  positioning: {
    eyebrow: 'What sets us apart',
    title: 'We do not sell secrecy.',
    text: 'Much of this market promises opacity — invisible accounts, structures "no one can see," tax that disappears. That promise ages badly and, in an environment of automatic exchange of information between countries, tends to become a problem precisely when the client would most need peace of mind.\n\nOur work is the opposite: to design structures that can be shown. Declared where they must be declared, defensible before any authority, and discreet where discretion is legitimate — in the relationship between you and your advisor.',
    quote: 'Confidentiality is our relationship with you. Secrecy from the tax authority is another matter — and it is not what we do.',
  },

  review: {
    eyebrow: 'Already living abroad?',
    title: 'Is your structure still correct?',
    text: 'Between 2024 and 2026, several countries in the region changed relevant rules on foreign income, controlled companies, profit distribution and succession. Structures set up before then may have ceased to be efficient — or appropriate. The review comes before any new move.',
    cta: 'Request a review of my structure',
  },

  blog: {
    eyebrow: 'Insights',
    title: 'Intelligence for those who think globally.',
    lede: 'Analysis with cited sources, no easy promises — written by those who execute.',
  },

  cta: {
    title: 'Ready to structure your international life?',
    text: 'Start with a diagnosis of your case. One conversation is enough to understand your objective and tell you, candidly, what makes sense.',
    note: 'Service in Portuguese, Spanish and English',
  },
};

export const countriesIndex: Content['countriesIndex'] = {
  metaTitle: 'Uruguay, Chile & Paraguay — where we operate | Global & Co.',
  metaDescription:
    'The three countries where Global & Co. structures residency, wealth and business for international families and entrepreneurs, with a comparison by profile.',
  breadcrumb: 'Countries',
  title: 'Three countries. Different profiles. One choice that has to be right.',
  lede: 'We are not a single-destination agency. We operate in all three — and that is precisely why we can compare without commercial bias.',
  compareCta: 'See the full comparison',
};

export const thanks: Content['thanks'] = {
  metaTitle: 'We received your request — Global & Co.',
  title: 'We received your request.',
  text: 'A Global & Co. consultant will be in touch within 24 business hours through the channel you indicated. If you prefer to move the conversation forward now, reach us on WhatsApp.',
  next: 'In the meantime, you can explore our analysis on residency, wealth and succession across the three countries.',
  back: 'Back to home',
};
