import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function CtaBand() {
  const t = useTranslations('home.cta');
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-dni relative text-center text-white">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{t('title')}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{t('text')}</p>
        <Link
          href="/contact-us"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-gold-dark"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  );
}
