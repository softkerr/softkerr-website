import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checking during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  // Production optimizations
  swcMinify: true, // Use SWC for minification (default in Next.js 13+)
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable React strict mode for better performance

  // Optimize package imports for better tree-shaking
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },

  // Experimental features for better optimization
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
};

export default nextConfig;
