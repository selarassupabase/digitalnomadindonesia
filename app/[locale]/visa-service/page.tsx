import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {getLocalizedServices} from '@/lib/serviceContent';
import type {Service} from '@/lib/services';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Visa Service',
  description:
    'Every Indonesian visa and KITAS handled end to end — tourist, business, digital nomad, investor, working, family and retirement permits.'
};

export default async function VisaServicePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const all = getLocalizedServices(locale);
  const visas = all.filter((s) => s.category === 'Visa');
  const kitas = all.filter((s) => s.category === 'KITAS');
  return <VisaView visas={visas} kitas={kitas} />;
}

function VisaView({visas, kitas}: {visas: Service[]; kitas: Service[]}) {
  const t = useTranslations('visaPage');
  const tc = useTranslations('common');

  const Grid = ({items}: {items: Service[]}) => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <Link key={s.slug} href={`/${s.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand">{s.category}</span>
          <h3 className="mt-1 text-lg font-bold text-ink group-hover:text-brand">{s.title}</h3>
          <p className="mt-2 flex-1 text-sm text-ink-soft">{s.tagline}</p>
          <span className="mt-4 text-sm font-semibold text-brand">{tc('learnMore')} →</span>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <PageHero title={t('heroTitle')} tagline={t('heroTagline')} image="/images/hero.jpeg" eyebrow="Visa Service" crumb={t('heroTitle')} />
      <section className="py-16">
        <div className="container-dni">
          <h2 className="mb-2 text-2xl font-bold text-ink">{t('visas')}</h2>
          <p className="mb-8 max-w-2xl text-ink-soft">{t('visasIntro')}</p>
          <Grid items={visas} />

          <h2 className="mb-2 mt-16 text-2xl font-bold text-ink">{t('kitasTitle')}</h2>
          <p className="mb-8 max-w-2xl text-ink-soft">{t('kitasIntro')}</p>
          <Grid items={kitas} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
