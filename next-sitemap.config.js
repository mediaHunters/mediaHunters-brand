/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://mediahunters.pl',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/termsconditions', '/privacypolicy'],
  generateIndexSitemap: true,
  transform: async (config, path) => {
    return {
      loc: path, 
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/termsconditions', '/privacypolicy'],
      },
    ],
  },
}