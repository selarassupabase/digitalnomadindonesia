import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function PageHero({
  title,
  tagline,
  image = '/images/why-1.webp',
  eyebrow,
  crumb
}: {
  title: string;
  tagline?: string;
  image?: string;
  eyebrow?: string;
  crumb?: string;
}) {
  const t = useTranslations('ui');
  return (
    <section className="relative flex min-h-[52vh] items-center pt-20">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-brand-900/40" />
      <div className="container-dni relative py-16 text-white">
        <nav className="mb-4 flex items-center gap-2 text-sm text-white/70">
          <Link href="/" className="hover:text-white">{t('home')}</Link>
          <span>/</span>
          <span className="text-white/90">{crumb ?? title}</span>
        </nav>
        {eyebrow && (
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {tagline && <p className="mt-4 max-w-2xl text-lg text-white/85">{tagline}</p>}
      </div>
    </section>
  );
}
