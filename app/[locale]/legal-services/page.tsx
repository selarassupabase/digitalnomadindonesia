import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Legal Services',
  description:
    'Company registration (PT PMA), tax ID (NPWP), virtual office, sworn translation and document legalization for foreigners in Indonesia.'
};

const items = [
  {
    title: 'PT PMA Company Setup',
    text: 'Establish a foreign-owned limited liability company (PT PMA) with the right business classification, capital structure and licensing.'
  },
  {
    title: 'Company Registration',
    text: 'End-to-end incorporation: deed of establishment, NIB, business licenses and all supporting registrations.'
  },
  {
    title: 'Tax ID (NPWP)',
    text: 'Obtain your personal or corporate NPWP and stay compliant with Indonesian tax obligations.'
  },
  {
    title: 'Virtual Office',
    text: 'A registered business address in a strategic location — the practical, affordable base for your company.'
  },
  {
    title: 'Sworn & Certified Translation',
    text: 'Legally recognized translations of official documents by sworn translators.'
  },
  {
    title: 'Document Legalization',
    text: 'Notarization and legalization of documents for use with Indonesian authorities and abroad.'
  }
];

export default async function LegalServicesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        title="Legal Services"
        tagline="Company setup, tax and compliance for foreigners doing business in Indonesia — handled by specialists."
        image="/images/blog-property.webp"
        eyebrow="Legal Services"
        crumb="Legal Services"
      />

      <section className="py-16">
        <div className="container-dni">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink">Everything you need to operate legally</h2>
            <p className="mt-3 text-ink-soft">
              Whether you're launching a PT PMA or need a single document legalized, our legal team makes the process straightforward.
            </p>
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
