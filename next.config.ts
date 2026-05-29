import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as static HTML for Amplify
  output: 'export',
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Note: headers, redirects, and rewrites don't work with static export
  // Use Amplify's routing configuration instead if needed
};

export default nextConfig;
