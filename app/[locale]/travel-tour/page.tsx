import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Travel & Tour',
  description:
    'Curated Bali tours, airport transfers, and tailor-made itineraries for digital nomads and travelers in Indonesia.'
};

const items = [
  {title: 'Private Bali Tours', text: 'Explore temples, rice terraces, waterfalls and beaches with a private driver and guide.'},
  {title: 'Airport Transfers', text: 'Reliable, comfortable pickups and drop-offs across Bali, arranged in advance.'},
  {title: 'Tailor-Made Itineraries', text: 'Custom multi-day trips built around your interests, schedule and budget.'},
  {title: 'Adventure & Activities', text: 'Surfing, diving, volcano treks, yoga retreats and more — booked and coordinated for you.'},
  {title: 'Island Hopping', text: 'Trips to Nusa Penida, the Gili Islands and beyond, with transport and logistics handled.'},
  {title: 'Group & Team Trips', text: 'Retreats and outings for co-working communities, teams and groups of friends.'}
];

export default async function TravelTourPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        title="Travel & Tour"
        tagline="Make the most of Bali — curated tours, transfers and experiences, all arranged by our travel team."
        image="/images/destination-canggu.webp"
        eyebrow="Travel & Tour"
        crumb="Travel & Tour"
      />

      <section className="py-16">
        <div className="container-dni">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink">Experiences across the island</h2>
            <p className="mt-3 text-ink-soft">
              From a single airport pickup to a fully planned week, we take care of the details so you can enjoy Bali.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
