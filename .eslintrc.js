module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
  ignorePatterns: [
    '.eslintrc.js',
    'next.config.js',
    'tailwind.config.js',
    'jest.config.js',
    'next-env.d.ts',
  ], // 解析対象からの除外
};
