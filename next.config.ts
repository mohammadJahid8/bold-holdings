import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "assets.aceternity.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
