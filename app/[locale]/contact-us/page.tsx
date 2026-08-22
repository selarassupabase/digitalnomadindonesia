import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import {site} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Digital Nomad Indonesia for visas, KITAS, legal services and travel in Bali, Indonesia.'
};

export default async function ContactPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations('contact');
  return (
    <>
      <PageHero title={t('hero')} tagline={t('tagline')} image="/images/destination-canggu.webp" eyebrow="DNI" crumb={t('hero')} />

      <section className="py-16">
        <div className="container-dni grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-2xl font-bold text-ink">{t('formTitle')}</h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-brand">{t('reachUs')}</h3>
              <ul className="space-y-6 text-sm">
                <li className="flex gap-4">
                  <IconPin />
                  <span className="text-ink-soft">{site.address}</span>
                </li>
                <li className="flex gap-4">
                  <IconMail />
                  <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-brand">{site.email}</a>
                </li>
                <li className="flex gap-4">
                  <IconChat />
                  <div className="text-ink-soft">
                    <div className="font-semibold text-ink">WhatsApp</div>
                    <div>Visa &amp; Legal · Travel divisions</div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white p-2.5 text-ink-soft shadow-sm hover:text-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                </a>
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-white p-2.5 text-ink-soft shadow-sm hover:text-brand">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9v8M6 6v.01M10 17v-4a2 2 0 014 0v4M10 9v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2"/></svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function IconPin() {
  return <svg className="mt-0.5 shrink-0 text-brand" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>;
}
function IconMail() {
  return <svg className="mt-0.5 shrink-0 text-brand" width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2"/></svg>;
}
function IconChat() {
  return <svg className="mt-0.5 shrink-0 text-brand" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-8.5 8.5 8.5 8.5 0 01-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 014 11.5 8.5 8.5 0 0121 11.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>;
}
