/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "stripe-camo.global.ssl.fastly.net"],
  },
};

module.exports = nextConfig;
