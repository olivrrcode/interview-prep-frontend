/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  compress: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      crypto: require.resolve('crypto-browserify'),
    };

    config.output.globalObject = 'self';
    config.module.rules.push({
      test: /monaco-editor.*\.worker\.js$/,
      use: { loader: 'worker-loader', options: { inline: 'no-fallback' } },
    });

    return config;
  },
};

export default nextConfig;
