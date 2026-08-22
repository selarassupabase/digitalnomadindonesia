import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Legal Services',
  description:
    'Company registration (PT PMA), tax ID (NPWP), virtual office, sworn translation and document legalization for foreigners in Indonesia.'
};

export default async function LegalServicesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <LegalView />;
}

function LegalView() {
  const t = useTranslations('legal');
  const items = t.raw('items') as {title: string; text: string}[];

  return (
    <>
      <PageHero title={t('heroTitle')} tagline={t('heroTagline')} image="/images/blog-property.webp" eyebrow="Legal Services" crumb={t('heroTitle')} />
      <section className="py-16">
        <div className="container-dni">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink">{t('title')}</h2>
            <p className="mt-3 text-ink-soft">{t('intro')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
