import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@bnext/ui'],
  experimental: {
    externalDir: true,
  },
  async rewrites() {
    return [
      // Redirect ke blog zone
      {
        source: '/reservasi',
        destination: 'http://localhost:3001/reservasi'
      },
      {
        source: '/reservasi/:path*',
        destination: 'http://localhost:3001/reservasi/:path*'
      }
      // Redirect ke dashboard zone
      // {
      //   source: '/dashboard',
      //   destination: 'http://localhost:3002/dashboard'
      // },
      // {
      //   source: '/dashboard/:path*',
      //   destination: 'http://localhost:3002/dashboard/:path*'
      // }
    ]
  }
};

export default nextConfig;
