import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {latestPosts} from '@/lib/blog';
import FaqAccordion from '@/components/FaqAccordion';

const whyImages = ['/images/why-1.webp', '/images/why-2.webp', '/images/why-3.webp'];

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations('home');
  const tc = useTranslations('common');

  const why = t.raw('why.items') as {title: string; text: string}[];
  const visas = t.raw('visa.items') as {title: string; text: string; href: string}[];
  const destinations = t.raw('destinations.items') as {name: string; text: string}[];
  const faqs = t.raw('faq.items') as {q: string; a: string}[];
  const destImages = ['/images/destination-canggu.webp', '/images/destination-ubud.webp'];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[92vh] items-center">
        <Image src="/images/hero.jpeg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/60 to-brand-900/30" />
        <div className="container-dni relative pt-24">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
              🌴 Bali · Indonesia
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">{t('hero.subtitle')}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/visa-service" className="rounded-full bg-gold px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-gold-dark">
                {t('hero.ctaPrimary')}
              </Link>
              <Link href="/contact-us" className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="py-20">
        <div className="container-dni text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">{t('about.eyebrow')}</p>
          <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-snug text-ink sm:text-3xl">
            {t('about.text')}
          </h2>
        </div>
      </section>

      {/* ---------- WHY BALI ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="container-dni">
          <h2 className="mb-12 text-center text-3xl font-bold text-ink">{t('why.title')}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {why.map((item, i) => (
              <article key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
                <div className="relative h-52">
                  <Image src={whyImages[i]} alt={item.title} fill className="object-cover" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-bold text-white shadow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- COST OF LIVING ---------- */}
      <section className="py-20">
        <div className="container-dni grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image src="/images/why-2.webp" alt="Cost of living in Bali" fill className="object-cover" />
          </div>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">Bali</p>
            <h2 className="mb-4 text-3xl font-bold text-ink">{t('cost.title')}</h2>
            <p className="text-lg leading-relaxed text-ink-soft">{t('cost.text')}</p>
          </div>
        </div>
      </section>

      {/* ---------- VISA OPTIONS ---------- */}
      <section className="bg-brand py-20 text-white">
        <div className="container-dni">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">{t('visa.title')}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">{t('visa.subtitle')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {visas.map((v, i) => (
              <div key={i} className="flex flex-col rounded-2xl bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur">
                <h3 className="mb-3 text-xl font-bold">{v.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">{v.text}</p>
                <Link href={v.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all">
                  {tc('learnMore')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DESTINATIONS ---------- */}
      <section className="py-20">
        <div className="container-dni">
          <h2 className="mb-12 text-center text-3xl font-bold text-ink">{t('destinations.title')}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {destinations.map((d, i) => (
              <article key={i} className="group relative overflow-hidden rounded-3xl shadow-md">
                <div className="relative h-80">
                  <Image src={destImages[i]} alt={d.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{d.name}</h3>
                  <p className="text-sm leading-relaxed text-white/85">{d.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LATEST NEWS ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="container-dni">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-ink">{t('news.title')}</h2>
            <Link href="/blogs" className="hidden text-sm font-semibold text-brand hover:text-brand-dark sm:block">
              {t('news.cta')} →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {latestPosts.map((post) => (
              <article key={post.slug} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
                <div className="relative h-48">
                  {post.image ? (
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-brand to-brand-dark" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}
                  </time>
                  <h3 className="mb-3 line-clamp-3 font-bold leading-snug text-ink">{post.title}</h3>
                  <p className="mb-4 line-clamp-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                  <Link href={`/blogs/${post.slug}`} className="text-sm font-semibold text-brand hover:text-brand-dark">
                    {tc('readMore')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="py-20">
        <div className="container-dni">
          <h2 className="mb-12 text-center text-3xl font-bold text-ink">{t('faq.title')}</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
      <section className="relative overflow-hidden bg-ink py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="container-dni relative text-center text-white">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{t('cta.title')}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{t('cta.text')}</p>
          <Link href="/contact-us" className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-gold-dark">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
}
