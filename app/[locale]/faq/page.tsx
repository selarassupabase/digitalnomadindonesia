import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Indonesian visas, KITAS permits, taxes and setting up a business as a foreigner.'
};

export default async function FaqPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <FaqContent />;
}

function FaqContent() {
  const t = useTranslations('faqPage');
  const items = t.raw('items') as {q: string; a: string}[];

  return (
    <>
      <PageHero title={t('hero')} tagline={t('tagline')} image="/images/why-2.webp" eyebrow="Help" crumb={t('hero')} />
      <section className="py-16">
        <div className="container-dni">
          <FaqAccordion items={items} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
