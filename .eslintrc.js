module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2020, // Ensure compatibility with modern ECMAScript features
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react',
    'react-hooks',
    'unused-imports',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Enforces React-specific linting rules
    'plugin:react-hooks/recommended', // Enforces React hooks rules
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
    'next/core-web-vitals', // Next.js-specific linting rules
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true, // Add browser for React environment
    es6: true,
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/', '.next/', 'dist/'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused variables, ignore variables starting with "_"
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react-hooks/exhaustive-deps': 'warn', // Warn on missing dependencies in useEffect
    'unused-imports/no-unused-imports': 'warn', // Automatically remove unused imports
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Discourage console.logs
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc')],
  },
};
