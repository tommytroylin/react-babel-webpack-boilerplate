module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  rules: {
    'func-names': 'off',
    'react/prefer-stateless-function': 'warn',
    'import/extensions': ['error', { 'jsx': 'never' }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': [
      'test/**/*.js',
      'test/**/*.jsx',
      'webpack.config.babel.js',
    ] }],
  },
};
