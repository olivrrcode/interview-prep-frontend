module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/', '.next/'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
