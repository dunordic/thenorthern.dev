module.exports = {
  extends: [
    'kentcdodds/react',
    'kentcdodds/possible-errors',
    'kentcdodds/import',
    'kentcdodds/best-practices',
    'kentcdodds/jest',
  ],
  parser: 'babel-eslint',
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-param-reassign': ['error'],
  },
};
