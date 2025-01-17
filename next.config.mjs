/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables strict mode for React
  swcMinify: true, // Uses SWC for faster builds and minification
  experimental: {
    appDir: true, // Enables the new app directory structure if you're using it
    turbo: true, // Optimizes with TurboPack for better dev performance
  },
  images: {
    domains: ['example.com'], // Add your image host domains for Next.js Image Optimization
    formats: ['image/avif', 'image/webp'], // Enable modern image formats
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Maintain your `@` alias for imports
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000', // Example environment variable
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent build failures due to ESLint errors
  },
  typescript: {
    ignoreBuildErrors: false, // Enforces stricter TypeScript during builds
  },
  i18n: {
    locales: ['en'], // Default locale setup; expand if needed
    defaultLocale: 'en',
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    },
  ],
};

export default nextConfig;
