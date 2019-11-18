const babelOptions = {
  presets: ['babel-preset-gatsby', 'linaria/babel'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
