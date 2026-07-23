import type { Lang } from '../config/site';
import type { Content } from './types';
import { pt } from './pt/index';
import { es } from './es/index';
import { en } from './en/index';

/** Conteúdo por idioma — PT, ES e EN completos. */
export const content: Record<Lang, Content> = { pt, es, en };

export type { Content, ServiceContent, CountryContent, FaqItem, TitledItem, LegalBlock } from './types';
