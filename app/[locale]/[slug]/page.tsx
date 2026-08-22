import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {services, serviceSlugs, getService} from '@/lib/services';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({slug}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline
  };
}

export default async function ServicePage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
          {/* Main content */}
          <div className="prose-dni lg:col-span-2">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2>What's included</h2>
            <ul>
              {service.includes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2>How it works</h2>
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

          {/* Sidebar: quick facts + CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-brand">
                  Quick facts
                </h3>
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
                <h3 className="mb-2 text-lg font-bold">Need this visa?</h3>
                <p className="mb-4 text-sm text-white/80">
                  Talk to our team and we'll handle the paperwork end to end.
                </p>
                <Link href="/contact-us" className="inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark">
                  Get in Touch
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="container-dni">
          <h2 className="mb-8 text-2xl font-bold text-ink">Other services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-md"
              >
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
