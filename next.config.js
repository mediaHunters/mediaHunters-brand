/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const runtimeCaching = require("next-pwa/cache.js");
const withContentlayer = require('next-contentlayer')

const isProd = process.env.NODE_ENV === 'production'

const PWA = require("next-pwa")({
  runtimeCaching,
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const MS_PER_SECOND = 1000;
const SECONDS_PER_DAY = 86400;

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: false,
  swcMinify: false,
  styledComponents: true,
  images: {
    minimumCacheTTL: 60,
    domains: ["images.unsplash.com", "picsum.photos"],
  },
  assetPrefix: isProd ? 'https://Mediahunters.b-cdn.net' : undefined,
  experimental: {
    styledComponents: true
},

  onDemandEntries: {
    maxInactiveAge: SECONDS_PER_DAY * MS_PER_SECOND,
    pagesBufferLength: 100,
  },

  async headers() {
    return [
      {
        source: "/:all*(js|css)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = withPlugins([PWA, withBundleAnalyzer, withContentlayer ], nextConfig);
