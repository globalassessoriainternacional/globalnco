import type { Lang } from '../config/site';
import type { Content } from './types';
import { pt } from './pt/index';

/**
 * Conteúdo por idioma.
 *
 * PT está completo. ES e EN entram no próximo lote:
 * basta criar src/data/es/ e src/data/en/ espelhando src/data/pt/
 * e reativar os idiomas em src/config/site.ts (LANGS).
 */
export const content: Record<Lang, Content> = { pt } as Record<Lang, Content>;

export type { Content, ServiceContent, CountryContent, FaqItem, TitledItem, LegalBlock } from './types';
