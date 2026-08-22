import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {serviceSlugs} from '@/lib/services';
import {getLocalizedService, getLocalizedServices} from '@/lib/serviceContent';
import type {Service} from '@/lib/services';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({slug}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const service = getLocalizedService(locale, slug);
  if (!service) return {};
  return {title: service.title, description: service.tagline};
}

export default async function ServicePage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const service = getLocalizedService(locale, slug);
  if (!service) notFound();
  const related = getLocalizedServices(locale).filter((s) => s.slug !== service.slug).slice(0, 3);

  return <ServiceView service={service} related={related} />;
}

function ServiceView({service, related}: {service: Service; related: Service[]}) {
  const t = useTranslations('service');

  return (
    <>
      <PageHero
        title={service.title}
        tagline={service.tagline}
        image={service.heroImage}
        eyebrow={service.category}
        crumb={service.title}
      />

      <section className="py-16">
        <div className="container-dni grid gap-12 lg:grid-cols-3">
          <div className="prose-dni lg:col-span-2">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2>{t('included')}</h2>
            <ul>
              {service.includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2>{t('howItWorks')}</h2>
            <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
              {service.process.map((step, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 font-bold text-brand">
                    {i + 1}
                  </div>
                  <h3 className="mb-1 font-bold text-ink">{step.title}</h3>
                  <p className="text-sm text-ink-soft">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">{t('quickFacts')}</h3>
                <dl className="space-y-3">
                  {service.facts.map((f, i) => (
                    <div key={i} className="flex justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                      <dt className="text-sm text-ink-soft">{f.label}</dt>
                      <dd className="text-right text-sm font-semibold text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl bg-brand p-6 text-white shadow-sm">
                <h3 className="mb-2 text-lg font-bold">{t('needTitle')}</h3>
                <p className="mb-4 text-sm text-white/80">{t('needText')}</p>
                <Link href="/contact-us" className="inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark">
                  {t('getInTouch')}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="container-dni">
          <h2 className="mb-8 text-2xl font-bold text-ink">{t('otherServices')}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">{s.category}</span>
                <h3 className="mt-1 font-bold text-ink group-hover:text-brand">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
