import type { NextConfig } from "next";

/**
 * Next.js config for CMR Hospitality Studio.
 * Kept intentionally lean — per-hotel behavior is driven by
 * src/config/hotel.config.ts, not by editing this file.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Add each hotel's image CDN / host here as the platform onboards them.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
