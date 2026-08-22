// Service detail pages (migrated from WordPress). Content is hardcoded and
// data-driven so a single template renders every service consistently.
// Slugs are preserved from the legacy site for SEO continuity.

export type ServiceFact = {label: string; value: string};
export type ServiceStep = {title: string; text: string};

export type Service = {
  slug: string;
  category: 'Visa' | 'KITAS' | 'Legal';
  title: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  facts: ServiceFact[];
  includes: string[];
  process: ServiceStep[];
};

export const services: Service[] = [
  {
    slug: 'remote-worker-visa-digital-nomad',
    category: 'Visa',
    title: 'Remote Worker Visa (Digital Nomad)',
    tagline: 'Live in Bali while working remotely for a company based abroad.',
    heroImage: '/images/blog-nomad.webp',
    intro: [
      'The Remote Worker Visa — often called the Digital Nomad Visa — lets remote professionals live in Indonesia while earning income from an employer or clients located outside the country.',
      'It is valid for up to one year and allows multiple entries, making it ideal for nomads who travel in and out of Bali during their stay.'
    ],
    facts: [
      {label: 'Validity', value: 'Up to 1 year'},
      {label: 'Entries', value: 'Multiple'},
      {label: 'Eligibility', value: 'Employed by a non-Indonesian company'},
      {label: 'Income tax', value: 'Foreign income not taxed locally'}
    ],
    includes: [
      'Eligibility assessment and document checklist',
      'Application preparation and submission',
      'Sponsor and immigration liaison',
      'Status updates until the visa is issued'
    ],
    process: [
      {title: 'Consultation', text: 'We confirm your eligibility and outline the documents you need.'},
      {title: 'Preparation', text: 'We compile and review your application to avoid rejections.'},
      {title: 'Submission', text: 'We submit to immigration and handle all follow-ups.'},
      {title: 'Approval', text: 'You receive your visa and can enter Indonesia.'}
    ]
  },
  {
    slug: 'electronic-visa-on-arrival',
    category: 'Visa',
    title: 'Electronic Visa on Arrival (e-VOA)',
    tagline: 'A fast single-entry visa you arrange online before you fly.',
    heroImage: '/images/destination-canggu.webp',
    intro: [
      'The Electronic Visa on Arrival (e-VOA) is a single-entry visa valid for 30 days, including your day of arrival.',
      'It can be extended once for an additional 30 days without leaving the country — perfect for short stays and holidays in Bali.'
    ],
    facts: [
      {label: 'Validity', value: '30 days'},
      {label: 'Entries', value: 'Single'},
      {label: 'Extension', value: 'Once, +30 days'},
      {label: 'Applied', value: 'Online, before arrival'}
    ],
    includes: [
      'e-VOA application handled end to end',
      'Document verification',
      'Extension processing when needed',
      'Support throughout your stay'
    ],
    process: [
      {title: 'Apply online', text: 'We prepare and submit your e-VOA before you travel.'},
      {title: 'Receive e-VOA', text: 'Your approval arrives by email, ready to show on arrival.'},
      {title: 'Extend (optional)', text: 'We handle your +30 day extension inside Indonesia.'}
    ]
  },
  {
    slug: 'multiple-entry-visas',
    category: 'Visa',
    title: 'Multiple Entry Visas',
    tagline: 'Come and go freely for up to five years.',
    heroImage: '/images/why-1.webp',
    intro: [
      'The Multiple Entry Visa remains valid for 1, 2, or 5 years from the date of issuance and allows stays of up to 60 days per visit.',
      'Each stay can be extended twice, granting an extra 60 days each time without the need to leave the country — ideal for frequent visitors and business travelers.'
    ],
    facts: [
      {label: 'Validity', value: '1, 2, or 5 years'},
      {label: 'Entries', value: 'Multiple'},
      {label: 'Stay per visit', value: 'Up to 60 days'},
      {label: 'Extensions', value: 'Twice, +60 days each'}
    ],
    includes: [
      'Visa category advice (business / tourism / family)',
      'Full application preparation and submission',
      'In-country extension support',
      'Immigration liaison throughout validity'
    ],
    process: [
      {title: 'Consultation', text: 'We match you to the right multiple-entry category.'},
      {title: 'Preparation', text: 'We prepare your sponsor and supporting documents.'},
      {title: 'Submission', text: 'We submit and track your application.'},
      {title: 'Approval', text: 'You receive a visa valid for years of easy travel.'}
    ]
  },
  {
    slug: 'single-entry-visas',
    category: 'Visa',
    title: 'Single Entry Visas',
    tagline: 'For a focused stay in Indonesia for tourism, business, or family.',
    heroImage: '/images/destination-ubud.webp',
    intro: [
      'A Single Entry Visa allows one entry into Indonesia for a defined purpose such as tourism, business meetings, or visiting family.',
      'Depending on the category it can be extended to prolong your stay. We help you choose the right type and manage extensions.'
    ],
    facts: [
      {label: 'Entries', value: 'Single'},
      {label: 'Purpose', value: 'Tourism / Business / Family'},
      {label: 'Extension', value: 'Available by category'},
      {label: 'Applied', value: 'Before arrival'}
    ],
    includes: [
      'Category selection and eligibility check',
      'Application preparation and submission',
      'Sponsorship where required',
      'Extension handling'
    ],
    process: [
      {title: 'Consultation', text: 'We identify the correct single-entry category for your goal.'},
      {title: 'Preparation', text: 'We assemble and check your documents.'},
      {title: 'Submission', text: 'We submit and monitor progress.'},
      {title: 'Approval', text: 'You travel with the right visa in hand.'}
    ]
  },
  {
    slug: 'single-entry-tourist-visa-b211',
    category: 'Visa',
    title: 'Single Entry Tourist Visa (B211)',
    tagline: 'The popular visa for longer holidays and remote stays in Bali.',
    heroImage: '/images/why-3.webp',
    intro: [
      'The B211 is a single-entry visa widely used by tourists and remote workers who want to stay in Indonesia longer than the visa-on-arrival period.',
      'It is initially valid for 60 days and can be extended, giving you the flexibility to enjoy an extended stay in Bali.'
    ],
    facts: [
      {label: 'Validity', value: '60 days'},
      {label: 'Entries', value: 'Single'},
      {label: 'Extension', value: 'Extendable'},
      {label: 'Best for', value: 'Long holidays & remote stays'}
    ],
    includes: [
      'B211 sponsorship and application',
      'Document preparation and review',
      'Extension processing inside Indonesia',
      'Ongoing support during your stay'
    ],
    process: [
      {title: 'Sponsorship', text: 'We provide the required sponsor and prepare your file.'},
      {title: 'Submission', text: 'We submit your B211 and keep you updated.'},
      {title: 'Arrival', text: 'You enter Indonesia for your 60-day stay.'},
      {title: 'Extension', text: 'We extend your visa so you can stay longer.'}
    ]
  },
  {
    slug: 'visa-on-arrival-extension',
    category: 'Visa',
    title: 'Visa On Arrival Extension',
    tagline: 'Stay 30 days longer without leaving Indonesia.',
    heroImage: '/images/hero.jpeg',
    intro: [
      'If you entered Indonesia on a Visa on Arrival, you can extend your stay once for an additional 30 days.',
      'We manage the entire extension process — paperwork, immigration visits, and timing — so you can keep enjoying Bali without interruption.'
    ],
    facts: [
      {label: 'Extension', value: '+30 days'},
      {label: 'Frequency', value: 'Once per VOA'},
      {label: 'Requirement', value: 'Valid Visa on Arrival'},
      {label: 'Process', value: 'Handled in-country'}
    ],
    includes: [
      'Eligibility and timing check',
      'Extension paperwork preparation',
      'Immigration office handling',
      'Passport collection coordination'
    ],
    process: [
      {title: 'Check', text: 'We confirm your VOA is eligible and time the extension.'},
      {title: 'Submit', text: 'We lodge the extension with immigration.'},
      {title: 'Process', text: 'We manage any required immigration visits.'},
      {title: 'Done', text: 'Your stay is extended by 30 days.'}
    ]
  },
  {
    slug: 'investor-kitas',
    category: 'KITAS',
    title: 'Investor KITAS',
    tagline: 'A stay permit for foreign investors and company directors.',
    heroImage: '/images/blog-property.webp',
    intro: [
      'The Investor KITAS is a limited-stay permit for foreign nationals who invest in or hold a director/commissioner role in an Indonesian company (PT PMA).',
      'It offers a longer, more stable stay than tourist visas, without the requirement of a separate work permit (IMTA) for eligible investors.'
    ],
    facts: [
      {label: 'Type', value: 'Limited-stay permit (KITAS)'},
      {label: 'Validity', value: '1–2 years, renewable'},
      {label: 'For', value: 'Investors & company directors'},
      {label: 'Requires', value: 'A PT PMA in Indonesia'}
    ],
    includes: [
      'PT PMA setup guidance (if needed)',
      'Investor KITAS application and sponsorship',
      'Immigration processing and biometrics',
      'Renewal support'
    ],
    process: [
      {title: 'Company', text: 'We ensure your PT PMA and shareholding meet requirements.'},
      {title: 'Application', text: 'We prepare and submit your Investor KITAS.'},
      {title: 'Processing', text: 'We manage immigration steps and biometrics.'},
      {title: 'Issued', text: 'You receive a multi-year stay permit.'}
    ]
  },
  {
    slug: 'working-kitas',
    category: 'KITAS',
    title: 'Working KITAS',
    tagline: 'Live and work legally in Indonesia under a local sponsor.',
    heroImage: '/images/why-2.webp',
    intro: [
      'The Working KITAS allows foreign professionals to be legally employed in Indonesia, sponsored by an Indonesian company.',
      'It bundles the work permit and stay permit so you can work with peace of mind. We coordinate the process with your employer.'
    ],
    facts: [
      {label: 'Type', value: 'Work + stay permit'},
      {label: 'Validity', value: '6–12 months, renewable'},
      {label: 'For', value: 'Foreign employees'},
      {label: 'Requires', value: 'A sponsoring company'}
    ],
    includes: [
      'Work permit (IMTA) and KITAS processing',
      'Employer and immigration coordination',
      'Biometrics and reporting',
      'Renewal and family add-on options'
    ],
    process: [
      {title: 'Sponsor', text: 'We align documents with your sponsoring employer.'},
      {title: 'Permit', text: 'We process the work permit and KITAS together.'},
      {title: 'Biometrics', text: 'We schedule and manage immigration steps.'},
      {title: 'Issued', text: 'You are cleared to live and work legally.'}
    ]
  },
  {
    slug: 'family-kitas',
    category: 'KITAS',
    title: 'Family KITAS',
    tagline: 'Keep your family together in Indonesia.',
    heroImage: '/images/destination-ubud.webp',
    intro: [
      'The Family KITAS lets spouses and children of KITAS holders or Indonesian citizens stay in Indonesia legally as dependents.',
      'It provides a stable, renewable stay tied to the family sponsor, so your loved ones can settle with you in Bali.'
    ],
    facts: [
      {label: 'Type', value: 'Dependent stay permit'},
      {label: 'Validity', value: '1 year, renewable'},
      {label: 'For', value: 'Spouses & children'},
      {label: 'Sponsor', value: 'KITAS holder or Indonesian spouse'}
    ],
    includes: [
      'Dependent eligibility assessment',
      'Family KITAS application and sponsorship',
      'Immigration processing',
      'Renewal support'
    ],
    process: [
      {title: 'Assess', text: 'We confirm the sponsor and dependent eligibility.'},
      {title: 'Apply', text: 'We prepare and submit the family application.'},
      {title: 'Process', text: 'We handle immigration and biometrics.'},
      {title: 'Issued', text: 'Your family receives their stay permits.'}
    ]
  },
  {
    slug: 'retirement-kitas',
    category: 'KITAS',
    title: 'Retirement KITAS',
    tagline: 'Enjoy your retirement in paradise, legally and stress-free.',
    heroImage: '/images/why-1.webp',
    intro: [
      'The Retirement KITAS is designed for foreign nationals aged 55 and over who wish to retire in Indonesia.',
      'It grants a renewable stay and, over time, can lead to a longer-term KITAP. We handle the requirements so you can focus on enjoying Bali.'
    ],
    facts: [
      {label: 'Type', value: 'Retirement stay permit'},
      {label: 'Validity', value: '1 year, renewable'},
      {label: 'Minimum age', value: '55 years'},
      {label: 'Path', value: 'Renewable toward KITAP'}
    ],
    includes: [
      'Eligibility and requirement guidance',
      'Retirement KITAS application and sponsorship',
      'Immigration processing',
      'Renewal and KITAP roadmap'
    ],
    process: [
      {title: 'Eligibility', text: 'We confirm age and requirement details.'},
      {title: 'Application', text: 'We prepare and submit your retirement permit.'},
      {title: 'Processing', text: 'We manage immigration steps for you.'},
      {title: 'Issued', text: 'You settle into retirement in Bali.'}
    ]
  }
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
