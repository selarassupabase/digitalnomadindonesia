'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact');
  const topics = t.raw('topics') as string[];
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const field =
    'w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20';

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t('name')} className={field} />
        <input name="email" type="email" required placeholder={t('email')} className={field} />
      </div>
      <input name="phone" placeholder={t('phone')} className={field} />
      <select name="topic" defaultValue="" required className={field}>
        <option value="" disabled>
          {t('topic')}
        </option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      <textarea name="message" required rows={5} placeholder={t('message')} className={field} />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-gold px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-gold-dark disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>

      {status === 'success' && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{t('success')}</p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{t('error')}</p>
      )}
    </form>
  );
}
