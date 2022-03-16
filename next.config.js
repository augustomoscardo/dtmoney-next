/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    mongodburl: "mongodb://localhost:3000/transactions",
  },
};
