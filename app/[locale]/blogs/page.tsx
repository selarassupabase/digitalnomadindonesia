import type {Metadata} from 'next';
import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {posts} from '@/lib/blog';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'News, guides and updates on Indonesian visas, immigration, KITAS, tax and living in Bali as a foreigner.'
};

export default async function BlogsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        title="Blogs & Guides"
        tagline="Immigration updates, visa guides and practical advice for living and working in Indonesia."
        image="/images/blog-kitas.webp"
        eyebrow="News"
        crumb="Blogs"
      />

      <section className="py-16">
        <div className="container-dni">
          {/* Featured */}
          <Link href={`/blogs/${featured.slug}`} className="group mb-14 grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg md:grid-cols-2">
            <div className="relative min-h-64">
              {featured.image ? (
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-brand to-brand-dark" />
              )}
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">Featured</span>
              <h2 className="text-2xl font-bold leading-snug text-ink group-hover:text-brand">{featured.title}</h2>
              <p className="mt-3 text-ink-soft">{featured.excerpt}</p>
              <span className="mt-5 text-sm font-semibold text-brand">Read article →</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md">
                <div className="relative h-48">
                  {post.image ? (
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand to-brand-dark text-white/90">
                      <span className="text-sm font-semibold">DNI</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                    {new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}
                  </time>
                  <h3 className="mb-3 line-clamp-3 font-bold leading-snug text-ink group-hover:text-brand">{post.title}</h3>
                  <p className="line-clamp-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-brand">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
