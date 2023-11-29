/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Your custom webpack configurations can go here

    return config;
  },
};

module.exports = nextConfig;
