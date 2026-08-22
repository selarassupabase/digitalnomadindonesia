'use client';

import Image from 'next/image';
import {useState, useEffect} from 'react';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {mainNav} from '@/lib/site';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-brand shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-dni flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src="/images/logo-white.webp"
            alt="Digital Nomad Indonesia"
            width={150}
            height={74}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpenDrop(item.key)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
                >
                  {t(item.key)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {openDrop === item.key && (
                  <ul className="absolute left-0 top-full w-64 overflow-hidden rounded-lg border border-slate-100 bg-white py-2 shadow-xl">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block px-4 py-2 text-sm text-ink-soft transition hover:bg-brand-50 hover:text-brand"
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white"
              >
                {t(item.key)}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <Link
            href="/contact-us"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gold-dark sm:inline-block"
          >
            {t('getInTouch')}
          </Link>
          {/* Mobile toggle */}
          <button
            className="relative z-50 p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <nav className="container-dni flex flex-col gap-1 border-t border-white/10 pb-6 pt-2">
            {mainNav.map((item) => (
              <div key={item.key}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2.5 font-medium text-white/90 hover:bg-white/10"
                >
                  {t(item.key)}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-white/15 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex items-center justify-between px-3">
              <LanguageSwitcher />
              <Link href="/contact-us" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white">
                {t('getInTouch')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
