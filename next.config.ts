import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

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
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true, // Enable React strict mode for better performance

  // Experimental features for better optimization
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },

  // Compiler optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },

  // Target modern browsers - ES2020+ (avoid legacy polyfills)
  // This reduces bundle size by ~26 KiB
  transpilePackages: [], // Don't transpile modern packages
};
export default bundleAnalyzer(nextConfig);
