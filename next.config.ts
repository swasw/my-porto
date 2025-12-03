import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 🚀 Wajib untuk GitHub Pages
  output: 'export',

  // 🚀 Next Image harus unoptimized untuk export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 🚀 Sesuaikan dengan nama repo GitHub kamu
  basePath: '/my-porto',
  assetPrefix: '/my-porto',

  // Config tambahan kamu (dipertahankan)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
