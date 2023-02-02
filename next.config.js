/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
require('@next/bundle-analyzer')
const withBundleAnalyzer  = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

  
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    minimumCacheTTL: 60,
  },

  async headers() {
    return [
      {
        source: '/:all*(js|css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
}

module.exports = withBundleAnalyzer({
  env: {
      NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
  },
  ...nextConfig
})



