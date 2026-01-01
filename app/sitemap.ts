import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://legaleyes.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/assistant',
    '/vault',
    '/knowledge',
    '/workflow',
    '/microsoft-integration',
    '/partnership',
    '/innovation',
    '/in-house',
    '/transactional',
    '/litigation',
    '/collaboration',
    '/customer',
    '/security',
    '/company',
    '/newsroom',
    '/careers',
    '/law-school',
    '/blog',
    '/video',
    '/guide',
    '/legal',
    '/privacy-policy',
    '/press-kit',
    '/login',
    '/request-demo',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

