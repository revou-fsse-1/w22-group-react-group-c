/** @type {import('next').NextConfig} */
// require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "ik.imagekit.io"],
  },
};

module.exports = nextConfig;
