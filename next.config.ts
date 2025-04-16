import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: [
      "assets.aceternity.com",
      "upload.wikimedia.org",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
