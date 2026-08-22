import {Link} from '@/i18n/navigation';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 pt-20">
      <div className="container-dni text-center">
        <p className="text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gold px-7 py-3.5 font-semibold text-white transition hover:bg-gold-dark"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
