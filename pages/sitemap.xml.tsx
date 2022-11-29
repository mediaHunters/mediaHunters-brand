import React from "react";
import { NextApiResponse } from "next";
import glob from "glob";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
  const BASE_URL = "https://mediaHunters.pl/";

  const pagesDir = "pages/**/*.tsx";
  let pagesPaths = await glob.sync(pagesDir);

  pagesPaths = pagesPaths
    .filter((path: any) => !path.includes("["))
    .filter((path: any) => !path.includes("/_"))
    .filter((path: any) => !path.includes("404"))
    .map((path: string) =>
      path.slice(path.indexOf("/") + 1, path.lastIndexOf("."))
    );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pagesPaths
          .map((url: string) => {
            return `
              <url>
                <loc>${BASE_URL + url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
      </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
