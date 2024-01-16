// @ts-check

import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        port: '',
        pathname: '/**',
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default withBundleAnalyzer(config);
