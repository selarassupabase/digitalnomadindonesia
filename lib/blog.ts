// Blog post metadata (migrated from WordPress). Article bodies live in
// /content/blog/<slug>.md and are rendered by the blog post template.
// Slugs and dates are preserved from the legacy site.

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  image?: string;
};

export const posts: Post[] = [
  {
    slug: 'property-ownership-by-foreign-nationals-in-indonesia-rules-and-procedures-for-2025',
    title: 'Property Ownership by Foreign Nationals in Indonesia: Rules and Procedures for 2025',
    date: '2025-07-13',
    excerpt:
      "Indonesia's property market continues to attract foreign interest, particularly in Bali, Jakarta and Yogyakarta. Here's how to own property legally.",
    image: '/images/blog-property.webp'
  },
  {
    slug: 'latest-regulations-in-2025-how-to-obtain-kitas-and-kitap-in-indonesia-for-foreign-nationals',
    title: 'Latest Regulations in 2025: How to Obtain KITAS and KITAP in Indonesia for Foreign Nationals',
    date: '2025-07-09',
    excerpt:
      'Indonesia remains a prime destination for foreigners seeking to live, work or invest in Southeast Asia. Understanding the permit landscape is key.',
    image: '/images/blog-kitas.webp'
  },
  {
    slug: 'digital-nomad-visas-in-indonesia-everything-you-need-to-know-about-stay-permits-for-remote-workers',
    title: 'Digital Nomad Visas in Indonesia: Everything You Need to Know About Stay Permits for Remote Workers',
    date: '2025-07-06',
    excerpt:
      'A complete guide to the stay permits available to remote workers who want to live in Indonesia.',
    image: '/images/blog-nomad.webp'
  },
  {
    slug: 'the-guide-for-digital-nomads-understanding-immigration-regulations-in-indonesia-in-2025',
    title: 'The Guide for Digital Nomads: Understanding Immigration Regulations in Indonesia in 2025',
    date: '2025-07-02',
    excerpt:
      'How the immigration rules actually work for digital nomads coming to Indonesia in 2025.',
    image: '/images/blog-guide.webp'
  },
  {
    slug: 'different-land-titles-you-need-to-know-about',
    title: 'Different Land Titles You Need to Know About',
    date: '2024-09-23',
    excerpt:
      "Indonesia's growing investment activity has created strong demand for land and buildings. Know your titles before you buy."
  },
  {
    slug: 'indonesian-epo-exit-permit-only-procedure',
    title: 'Indonesian EPO (Exit Permit Only) Procedure',
    date: '2024-08-06',
    excerpt:
      'An Exit Permit Only (EPO) is issued to foreigners ending their stay in Indonesia. Here is how the process works.'
  },
  {
    slug: 'learn-about-the-indonesian-transitional-residence-permit-bridging-visa',
    title: 'Learn About the Indonesian Transitional Residence Permit (Bridging Visa)',
    date: '2024-07-12',
    excerpt:
      'The bridging visa keeps your stay valid while you transition between permit types. Understand when and how to use it.'
  },
  {
    slug: 'tax-id-npwp',
    title: 'Everything You Need to Know About NPWP: The Key to Tax Compliance in Indonesia',
    date: '2024-07-03',
    excerpt:
      'The NPWP is your Indonesian tax identification number — essential for compliance, business and many official processes.'
  },
  {
    slug: 'virtual-office',
    title: 'Virtual Offices: Redefining Workspaces in the Digital Age',
    date: '2024-07-03',
    excerpt:
      'A virtual office gives your business a registered address and professional presence without the cost of a physical space.'
  },
  {
    slug: 'company-registration-setup-a-pt-pma-in-indonesia',
    title: 'Company Registration: Setup A PT PMA in Indonesia',
    date: '2023-06-23',
    excerpt:
      'A step-by-step look at establishing a foreign-owned company (PT PMA) in Indonesia, from requirements to licensing.'
  },
  {
    slug: 'indonesias-limited-liability-companys-capital-structure',
    title: "Indonesia's Limited Liability Company's Capital Structure",
    date: '2024-04-17',
    excerpt:
      'How capital is structured in an Indonesian limited liability company, and what foreign investors need to plan for.'
  },
  {
    slug: 'whats-balis-new-tourist-tax-what-travelers-need-to-know',
    title: "What's Bali's New Tourist Tax & What Travelers Need To Know",
    date: '2024-03-05',
    excerpt:
      "Bali introduced a tourist levy — here's who pays, how much, and how to settle it before or on arrival."
  },
  {
    slug: 'what-are-my-options-the-foreigners-guide-for-investment',
    title: "What Are My Options: The Foreigner's Guide For Investment",
    date: '2024-02-12',
    excerpt:
      'An overview of the main ways foreigners can invest in Indonesia, and the structures that make it possible.'
  },
  {
    slug: 'foreigners-working-in-bali-what-do-i-need-to-ensure-to-work-legitimately-in-indonesia',
    title: 'Foreigners Working In Bali: What Do I Need To Ensure To Work Legitimately In Indonesia?',
    date: '2024-01-09',
    excerpt:
      'What permits and steps are required to work legally in Bali and avoid immigration issues.'
  },
  {
    slug: 'new-immigration-policy',
    title: 'New Immigration Policy',
    date: '2023-12-08',
    excerpt:
      "A summary of recent changes to Indonesia's immigration policy and what they mean for travelers and expats."
  },
  {
    slug: 'panama-guatemala-and-macau-are-now-eligible-to-useindonesia-visa-on-arrival',
    title: 'Panama, Guatemala and Macau Are Now Eligible to Use Indonesia Visa on Arrival',
    date: '2023-06-23',
    excerpt:
      "Indonesia expanded its Visa on Arrival eligibility list — here's what it means for travelers from these countries."
  },
  {
    slug: 'indonesia-proposes-new-regulations-for-visa-onshore-application-and-visa-exemptions',
    title: 'Indonesia Proposes New Regulations for Visa Onshore Application and Visa Exemptions',
    date: '2023-06-23',
    excerpt:
      'Proposed rules for onshore visa applications and visa exemptions, and how they could affect your stay.'
  }
];

export const latestPosts = posts.slice(0, 3);
