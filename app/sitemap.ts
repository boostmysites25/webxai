import { MetadataRoute } from 'next'
import { allProjects } from '@/data/portfolioContent'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webxaitech.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Core Pages (highest priority)
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // ── Service Pages (high commercial intent)
  const serviceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // ── Work / Portfolio Pages
  const workRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // ── Portfolio Case Studies
  const portfolioRoutes: MetadataRoute.Sitemap = allProjects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ── Blog Pages
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...workRoutes,
    ...portfolioRoutes,
    ...blogRoutes,
  ]
}
