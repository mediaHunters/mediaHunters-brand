import { writeFileSync } from 'fs';
import * as globby from 'globby';

const generateSitemap = async () => {
  // Fetch all routes based on patterns
  // Your folder structure might be different so change bellow to match your needs
  const pages = await globby.globby([
    '../pages/**/*.{ts,tsx,mdx}', // All routes inside /pages
    '../_posts/*.mdx', // All MDX files inside my /_content
    '!../pages/**/[*.{ts,tsx}', // Ignore my dynamic route index Example /pages/blog/[slug].tsx
    '!../pages/_*.{ts,tsx}', // Ignore next.js files
    '!../pages/api', // Ignore API routes
    '!../pages/admin.tsx' // Ignore pages not meant to be indexed
  ]);

  const urlSet = pages
    .map((page) => {
      // Remove none route related parts of filename.
      const path = page
        .replace('../pages', '')
        .replace('../_content', '')
        .replace(/(.tsx|.ts)/, '')
        .replace('.mdx', '')
        .replace('../_po', '/blog')
      // Remove the word index from route
      const route = path === '/index' ? '' : path;
      // Build url portion of sitemap.xml
      return `<url><loc>https://mediahunters.pl${route}</loc></url>`;
    })
    .join('');

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // Create sitemap file
  writeFileSync('../public/sitemap.xml', sitemap);
};

generateSitemap()