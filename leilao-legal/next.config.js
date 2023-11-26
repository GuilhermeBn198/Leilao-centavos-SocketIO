/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  // other properties...
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
}

module.exports = nextConfig
