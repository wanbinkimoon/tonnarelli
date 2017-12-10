const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirSrc = path.join(__dirname, 'src');
const dirAssets = path.join(__dirname, 'src/assets');

const appHtmlTitle = 'Tonnarelli';
/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    vendor: [
      'lodash'
    ],
    bundle: path.join(dirSrc, 'index.html')
  },
  resolve: {
    modules: [
      dirNode,
      dirSrc,
      dirAssets
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV
    }),

    new webpack.ProvidePlugin({
      // lodash
      '_': 'lodash'
    }),
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true
        }
      },

      // HTML
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
    },
    // STYLES
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: IS_DEV
          }
        },
      ]
    },

    // CSS / SASS
    {
      test: /\.ssss/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: IS_DEV
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: IS_DEV,
            includePaths: [dirAssets]
          }
        }
      ]
    },

    // EJS
    {
      test: /\.ejs$/,
      loader: 'ejs-loader'
    },

    // IMAGES
    {
      test: /\.(jpe?g|png|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }
  ]
}
};