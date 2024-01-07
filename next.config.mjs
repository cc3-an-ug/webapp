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
};

export default withBundleAnalyzer(config);
