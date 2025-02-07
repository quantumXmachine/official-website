/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{type: "host", value: "astrasurge.com"}],
      destination: 'https://www.astrasurge.com/:path*',
      permanent: true,
    }
  ]
}

module.exports = nextConfig
