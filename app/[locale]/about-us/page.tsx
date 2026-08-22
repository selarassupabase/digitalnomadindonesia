import type {Metadata} from 'next';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Digital Nomad Indonesia is a Bali-based team of visa, legal and travel specialists helping remote workers and expats settle in Indonesia.'
};

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about');
  const values = t.raw('values') as {title: string; text: string}[];
  const stats = t.raw('stats') as {value: string; label: string}[];

  return (
    <>
      <PageHero title={t('hero')} tagline={t('tagline')} image="/images/why-3.webp" eyebrow="DNI" crumb={t('hero')} />

      {/* Mission + story */}
      <section className="py-16">
        <div className="container-dni grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">{t('missionTitle')}</p>
            <h2 className="mb-4 text-3xl font-bold leading-snug text-ink">{t('mission')}</h2>
          </div>
          <div className="prose-dni">
            <h3 className="!mt-0">{t('storyTitle')}</h3>
            <p>{t('story')}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand py-14 text-white">
        <div className="container-dni grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-dni">
          <h2 className="mb-10 text-center text-3xl font-bold text-ink">Why choose us</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 16.5 6.6 18.2l.9-5.5-4-3.9L9 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="mb-2 font-bold text-ink">{v.title}</h3>
                <p className="text-sm text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
