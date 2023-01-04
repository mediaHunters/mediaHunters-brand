/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/api/sitemap',
        destination: '/sitemap.xml',
      },
    ]
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

module.exports = nextConfig
