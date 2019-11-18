module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/import',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/style',
  ],
  plugins: ['jest', 'unicorn'],
  rules: {
    'unicorn/prevent-abbreviations': [
      'error',
      {
        whitelist: {
          props: true,
        },
      },
    ],
  },
}
