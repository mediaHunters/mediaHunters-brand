function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
   <loc>https://mediaHunters.pl/cookies</loc>
   <lastmod>2022-12-02T10:40:08.275Z</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.0</priority>
   </url>
   <url>
   <loc>https://mediaHunters.pl/faq</loc>
   <lastmod>2022-12-02T10:40:08.275Z</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.7</priority>
   </url>
   <url>
   <loc>https://mediaHunters.pl/index</loc>
   <lastmod>2022-12-02T10:40:08.275Z</lastmod>
   <changefreq>monthly</changefreq>
   <priority>1.0</priority>
   </url>
   <url>
   <loc>https://mediaHunters.pl/pozycjonowanie</loc>
   <lastmod>2022-12-02T10:40:08.275Z</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.9</priority>
   </url>
   <url>
   <loc>https://mediaHunters.pl/strony-internetowe</loc>
   <lastmod>2022-12-02T10:40:08.275Z</lastmod>
   <changefreq>monthly</changefreq>
   <priority>0.9</priority>
   </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res } : { res: any }) {
  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(generateSiteMap());
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;