import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.picard.replit.dev",
    "*.replit.dev",
  ],
};

export default nextConfig;
