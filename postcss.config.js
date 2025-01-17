module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: { preset: 'default' }, // Minify CSS in production builds
    }),
  },
};
