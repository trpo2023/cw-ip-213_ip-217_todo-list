module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: 'error',
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }]
  },
};
