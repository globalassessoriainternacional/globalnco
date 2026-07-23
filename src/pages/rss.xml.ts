import type { APIRoute } from 'astro';
import { buildRss } from '../lib/rss';

export const GET: APIRoute = () => buildRss('pt');
