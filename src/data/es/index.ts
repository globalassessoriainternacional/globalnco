import type { Content } from '../types';
import { common, home, countriesIndex, thanks } from './home';
import { countries, compare } from './countries';
import { services, servicesIndex } from './services';
import { method, about, diagnostic, faqPage, contact, blog } from './institutional';
import { legal } from './legal';

export const es: Content = {
  common,
  home,
  countriesIndex,
  countries,
  compare,
  servicesIndex,
  services,
  method,
  about,
  diagnostic,
  faqPage,
  contact,
  blog,
  thanks,
  privacy: legal.privacy,
  terms: legal.terms,
};
