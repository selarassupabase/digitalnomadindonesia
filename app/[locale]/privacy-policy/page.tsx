import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import {site} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Digital Nomad Indonesia collects, uses and protects your personal information.'
};

export default async function PrivacyPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations('privacy');
  return (
    <>
      <PageHero title={t('hero')} image="/images/why-1.webp" crumb={t('hero')} />
      <section className="py-16">
        <div className="container-dni prose-dni max-w-3xl">
          <p className="text-sm text-slate-400">{t('updated')}</p>

          <p>
            This Privacy Policy explains how {site.name} ("we", "us", or "our") collects, uses,
            and protects the personal information you provide when you use our website or engage
            our visa, legal and travel services.
          </p>

          <h2>Information we collect</h2>
          <p>
            We may collect your name, email address, phone number, passport and immigration
            details, and any information you submit through our contact forms or during a
            consultation. We only collect what is necessary to provide our services.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To assess your eligibility and prepare visa, permit and legal applications.</li>
            <li>To communicate with you about your enquiry and the status of your services.</li>
            <li>To comply with Indonesian immigration, tax and legal requirements.</li>
            <li>To improve our website and the services we offer.</li>
          </ul>

          <h2>Sharing your information</h2>
          <p>
            We share your information only where necessary to deliver our services — for example,
            with Indonesian immigration or relevant government offices — or where required by law.
            We do not sell your personal data to third parties.
          </p>

          <h2>Data retention & security</h2>
          <p>
            We retain your information only as long as needed to provide our services and meet
            legal obligations, and we apply reasonable measures to keep it secure.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us.
          </p>

          <h2>Contact us</h2>
          <p>
            For any questions about this Privacy Policy, email us at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> or visit us at {site.address}.
          </p>
        </div>
      </section>
    </>
  );
}
