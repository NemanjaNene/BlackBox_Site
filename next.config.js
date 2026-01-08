/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'joyfruitspremium.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

