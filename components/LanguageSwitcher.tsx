'use client';

import {useLocale} from 'next-intl';
import {useState, useRef, useEffect} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing, localeNames, type Locale} from '@/i18n/routing';

export default function LanguageSwitcher({dark = false}: {dark?: boolean}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const change = (next: Locale) => {
    setOpen(false);
    router.replace(pathname, {locale: next});
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition ${
          dark
            ? 'text-ink-soft hover:bg-slate-100'
            : 'text-white/90 hover:bg-white/10'
        }`}
        aria-label="Change language"
      >
        <span className="uppercase">{locale}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                onClick={() => change(l)}
                className={`flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-slate-50 ${
                  l === locale ? 'font-semibold text-brand' : 'text-ink-soft'
                }`}
              >
                {localeNames[l]}
                <span className="text-xs uppercase text-slate-400">{l}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
