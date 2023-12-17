module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@stylexjs'],
  parserOptions: {
    project: ['tsconfig.json', '.config/tsconfig.node.json'],
    extraFileExtensions: [],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    rules: {
      '@stylexjs/valid-styles': ['error'],
    },
  },
  overrides: [],
  globals: {},
};
