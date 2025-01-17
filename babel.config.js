module.exports = {
  presets: [
    'next/babel', // Use Next.js's default Babel preset
    '@babel/preset-typescript', // Ensure TypeScript support
  ],
  plugins: [
    // Add plugins for optimizations or special features if necessary
    'babel-plugin-macros', // Example: For macros like styled-components, svgr, etc.
  ],
};
