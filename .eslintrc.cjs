module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: ['vitest'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, arrowParens: 'avoid' }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
