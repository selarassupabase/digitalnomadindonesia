import fs from 'node:fs';
import path from 'node:path';
import {services, getService, type Service} from './services';

// Merge English base (slug, category, heroImage + English copy) with a
// per-locale translation override from content/services/<locale>.json.
export function getLocalizedService(locale: string, slug: string): Service | undefined {
  const base = getService(slug);
  if (!base || locale === 'en') return base;
  try {
    const file = path.join(process.cwd(), 'content', 'services', `${locale}.json`);
    const data = JSON.parse(fs.readFileSync(file, 'utf8')) as Record<string, Partial<Service>>;
    const override = data[slug];
    return override ? {...base, ...override} : base;
  } catch {
    return base;
  }
}

export function getLocalizedServices(locale: string): Service[] {
  return services.map((s) => getLocalizedService(locale, s.slug)!);
}
