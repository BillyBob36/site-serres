import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  output: "export",
  basePath: "/site-serres",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
