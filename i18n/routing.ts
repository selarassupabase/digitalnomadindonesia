import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // English is the source language; the other four are auto-translated at build/edit time.
  locales: ['en', 'tr', 'pt', 'hi', 'zh'],
  defaultLocale: 'en',
  // Keep English URLs un-prefixed (preserves legacy SEO); others get /tr, /pt, /hi, /zh.
  localePrefix: 'as-needed'
});

export type Locale = (typeof routing.locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
  pt: 'Português',
  hi: 'हिन्दी',
  zh: '中文'
};
