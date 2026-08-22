import {NextResponse} from 'next/server';

// Contact form handler. Sends an email via Resend when RESEND_API_KEY is set.
// Configure in Vercel (or .env.local):
//   RESEND_API_KEY   -> your Resend API key
//   RESEND_FROM      -> verified sender, e.g. "DNI Website <hello@digitalnomadindonesia.org>"
//   CONTACT_TO       -> recipient (defaults to info@digitalnomadindonesia.org)

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ok: false, error: 'Invalid request'}, {status: 400});
  }

  const {name, email, phone, topic, message} = body;
  if (!name || !email || !message) {
    return NextResponse.json({ok: false, error: 'Missing required fields'}, {status: 422});
  }

  const to = process.env.CONTACT_TO || 'info@digitalnomadindonesia.org';
  const apiKey = process.env.RESEND_API_KEY;

  // Without an API key (local/demo), log and succeed so the form is testable.
  if (!apiKey) {
    console.log('[contact] (no RESEND_API_KEY set) message received:', {name, email, phone, topic});
    return NextResponse.json({ok: true, delivered: false});
  }

  const html = `
    <h2>New enquiry from the DNI website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>Topic:</strong> ${escapeHtml(topic || '-')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'DNI Website <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject: `New enquiry: ${topic || 'General'} — ${name}`,
        html
      })
    });
    if (!res.ok) throw new Error(await res.text());
    return NextResponse.json({ok: true, delivered: true});
  } catch (err) {
    console.error('[contact] send failed:', err);
    return NextResponse.json({ok: false, error: 'Send failed'}, {status: 502});
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
