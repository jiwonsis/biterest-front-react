// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const config = require('../config/webpack.config.dev.js');
const path = require('path');
const paths = require('../config/paths');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              module: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              includePaths: [paths.globalStyles],
            },
          },
        ],
      },
    ],
  },
};
