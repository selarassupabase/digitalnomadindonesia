// Central site data: contact info, navigation, services, socials.
// Content is hardcoded (migrated from the WordPress site). Slugs match the
// legacy URLs so existing SEO/links keep working.

export const site = {
  name: 'Digital Nomad Indonesia',
  shortName: 'DNI',
  domain: 'digitalnomadindonesia.org',
  email: 'info@digitalnomadindonesia.org',
  address:
    'Jl. Kayu Manis, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80351',
  whatsapp: {
    number: '+62 812-3960-5095',
    url: 'https://wa.me/6281239605095'
  },
  socials: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/'
  }
};

// Visa service pages (slugs preserved from WordPress).
export const visaServices = [
  {slug: 'remote-worker-visa-digital-nomad', title: 'Remote Worker Visa (Digital Nomad)'},
  {slug: 'electronic-visa-on-arrival', title: 'Electronic Visa on Arrival'},
  {slug: 'multiple-entry-visas', title: 'Multiple Entry Visas'},
  {slug: 'single-entry-visas', title: 'Single Entry Visas'},
  {slug: 'single-entry-tourist-visa-b211', title: 'Single Entry Tourist Visa (B211)'},
  {slug: 'visa-on-arrival-extension', title: 'Visa On Arrival Extension'},
  {slug: 'investor-kitas', title: 'Investor KITAS'},
  {slug: 'working-kitas', title: 'Working KITAS'},
  {slug: 'family-kitas', title: 'Family KITAS'},
  {slug: 'retirement-kitas', title: 'Retirement KITAS'}
] as const;

// Items shown in the header "Visa Service" dropdown (mirrors the live menu).
export const visaMenu = [
  'investor-kitas',
  'retirement-kitas',
  'electronic-visa-on-arrival',
  'single-entry-visas',
  'multiple-entry-visas',
  'remote-worker-visa-digital-nomad'
] as const;

export type NavItem = {
  key: string; // i18n key under `nav`
  href: string;
  children?: {title: string; href: string}[];
};

export const mainNav: NavItem[] = [
  {
    key: 'visaService',
    href: '/visa-service',
    children: visaMenu.map((slug) => {
      const s = visaServices.find((v) => v.slug === slug)!;
      return {title: s.title, href: `/${s.slug}`};
    })
  },
  {key: 'legalServices', href: '/legal-services'},
  {key: 'travelTour', href: '/travel-tour'},
  {key: 'about', href: '/about-us'},
  {key: 'blogs', href: '/blogs'},
  {key: 'contact', href: '/contact-us'},
  {key: 'faq', href: '/faq'}
];
