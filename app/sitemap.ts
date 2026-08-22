import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {serviceSlugs} from '@/lib/services';
import {posts} from '@/lib/blog';

const BASE = 'https://digitalnomadindonesia.org';

// All internal paths (relative to a locale root).
const staticPaths = [
  '',
  'visa-service',
  'legal-services',
  'travel-tour',
  'about-us',
  'contact-us',
  'faq',
  'privacy-policy',
  'blogs'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...serviceSlugs,
    ...posts.map((p) => `blogs/${p.slug}`)
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    for (const locale of routing.locales) {
      // Default locale is un-prefixed (localePrefix: 'as-needed').
      const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
      const url = `${BASE}${prefix}${path ? `/${path}` : ''}` || BASE;
      entries.push({
        url: url === BASE + '' ? BASE : url,
        changeFrequency: path.startsWith('blogs/') ? 'monthly' : 'weekly',
        priority: path === '' ? 1 : path.startsWith('blogs/') ? 0.6 : 0.8
      });
    }
  }
  return entries;
}
