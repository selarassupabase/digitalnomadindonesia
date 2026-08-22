import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {site} from '@/lib/site';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const tc = useTranslations('common');
  const year = 2025;

  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-dni grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo-white.webp"
            alt="Digital Nomad Indonesia"
            width={160}
            height={79}
            className="mb-4 h-12 w-auto"
          />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            {t('tagline')}
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {t('services')}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/visa-service" className="hover:text-white">{tn('visaService')}</Link></li>
            <li><Link href="/legal-services" className="hover:text-white">{tn('legalServices')}</Link></li>
            <li><Link href="/travel-tour" className="hover:text-white">{tn('travelTour')}</Link></li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {t('quickLinks')}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/blogs" className="hover:text-white">{tn('blogs')}</Link></li>
            <li><Link href="/about-us" className="hover:text-white">{tn('about')}</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">{tn('contact')}</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">{t('privacy')}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            {t('contact')}
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9v8M6 6v.01M10 17v-4a2 2 0 014 0v4M10 9v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-dni flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. {tc('allRightsReserved')}</p>
          <p>Made with care in Bali 🌴</p>
        </div>
      </div>
    </footer>
  );
}
