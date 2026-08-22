import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import {posts} from './lib/blog';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    // All media is served locally from /public/images (migrated, malware-free).
    formats: ['image/webp']
  },
  async redirects() {
    return [
      // Legacy WordPress blog posts lived at the site root (/<slug>/);
      // they now live under /blogs/<slug>. Preserve inbound links & SEO.
      ...posts.map((p) => ({
        source: `/${p.slug}`,
        destination: `/blogs/${p.slug}`,
        permanent: true
      })),
      // Other legacy slugs that changed.
      {source: '/travel-tour-services', destination: '/travel-tour', permanent: true},
      {source: '/home-old', destination: '/', permanent: true},
      {source: '/home', destination: '/', permanent: true}
    ];
  }
};

export default withNextIntl(nextConfig);
