import type {Metadata} from 'next';
import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Link} from '@/i18n/navigation';
import {posts} from '@/lib/blog';
import CtaBand from '@/components/CtaBand';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({slug: p.slug}));
}

function getBody(slug: string): string | null {
  const file = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string}>;
}): Promise<Metadata> {
  const {slug} = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {title: post.title, description: post.excerpt};
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = getBody(slug);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <article>
        <header className="relative flex min-h-[46vh] items-center pt-20">
          {post.image ? (
            <Image src={post.image} alt="" fill priority className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-brand-900/40" />
          <div className="container-dni relative py-14 text-white">
            <nav className="mb-4 flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-white">Blogs</Link>
            </nav>
            <time className="text-sm font-medium uppercase tracking-wide text-white/70">
              {new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
            </time>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">{post.title}</h1>
          </div>
        </header>

        {/* Body */}
        <div className="py-14">
          <div className="container-dni prose-dni max-w-3xl">
            {body ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="container-dni">
          <h2 className="mb-8 text-2xl font-bold text-ink">More articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blogs/${p.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md">
                <time className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {new Date(p.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}
                </time>
                <h3 className="mt-2 line-clamp-3 font-bold leading-snug text-ink group-hover:text-brand">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
