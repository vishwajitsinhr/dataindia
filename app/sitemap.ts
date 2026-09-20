import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://connectsangam.in'
  const now = new Date()

  // Topic hubs
  const hubs = [
    'economy',
    'population',
    'states',
    'health',
    'india-vs-world',
    'agriculture',
  ]

  // All article paths (grouped for readability)
  const articles = [
    // Economy
    '/economy/repo-rate',
    '/economy/inflation',
    '/economy/fiscal-deficit',
    '/economy/gdp-growth',
    '/economy/unemployment',
    '/economy/upi-payments',
    // Population
    '/population/age-visualised',
    '/population/urbanisation',
    '/population/demographic-dividend',
    '/population/literacy-gender-gap',
    // States
    '/states/growth',
    '/states/per-capita',
    '/states/literacy',
    '/states/poverty',
    // Health
    '/health/spending',
    '/health/air-quality',
    '/health/vaccination',
    '/health/ayushman-bharat',
    // India vs World
    '/india-vs-world/growth',
    '/india-vs-world/health-spending',
    '/india-vs-world/population',
    '/india-vs-world/vs-brazil',
    // Agriculture
    '/agriculture/production',
    '/agriculture/exports',
    '/agriculture/farmer-income',
  ]

  // Tools
  const tools = [
    '/tools',
    '/tools/emi',
    '/tools/inflation',
    '/tools/percentage',
  ]

  // Info / utility pages
  const infoPages = [
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/articles', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/glossary', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/visualizations', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Topic hubs
    ...hubs.map((hub) => ({
      url: `${baseUrl}/${hub}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // Articles
    ...articles.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Tools
    ...tools.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '/tools' ? 0.8 : 0.7,
    })),

    // Info pages
    ...infoPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}