/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const runtimeCaching = require("next-pwa/cache.js");

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

const mapModuleIds = fn => (compiler) => {
  const { context } = compiler.options;

  compiler.hooks.compilation.tap('ChangeModuleIdsPlugin', (compilation) => {
    compilation.hooks.beforeModuleIds.tap('ChangeModuleIdsPlugin', (modules) => {
      const { chunkGraph } = compilation;
      // eslint-disable-next-line @next/next/no-assign-module-variable
      for (const module of modules) {
        if (module.libIdent) {
          const origId = module.libIdent({ context });
          // eslint-disable-next-line
          if (!origId) continue;
          const namedModuleId = fn(origId, module);
          if (namedModuleId) {
              chunkGraph.setModuleId(module, namedModuleId);
          }
        }
      }
    });
  });
};

const withNamedLazyChunks = (nextConfig = {}) => Object.assign({}, nextConfig, {
  webpack: (config, options) => {
    config.plugins.push(
      mapModuleIds((id, module) => {
        if (
          id.includes('/global-brand-statement.js')
          || id.includes('signposting/signposting.js')
          || id.includes('reviews-container/index.js')
          || id.includes('why-we-made-this/why-we-made-this.js')
        ) {
          return `lazy-${module.debugId}`;
        }
        return false;
      }),
    );

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: false,
  swcMinify: false,
  styledComponents: true,
  images: {
    minimumCacheTTL: 60,
    domains: ["images.unsplash.com", "picsum.photos"],
  },
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

module.exports = withPlugins([PWA, withBundleAnalyzer, withNamedLazyChunks, mapModuleIds ], nextConfig);
