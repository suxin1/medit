

process.env.BABEL_ENV = 'renderer'

// import {fileURLToPath} from "url";
// import path from 'path';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import postcssPresetEnv from 'postcss-preset-env'
// import CopyPlugin from 'copy-webpack-plugin';
// import { createRequire } from 'node:module';
// import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

// const require = createRequire(import.meta.url);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const CopyPlugin = require('copy-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


/** @type {import('webpack').Configuration} */
exports.default = {
  mode: 'production',
  devtool: 'hidden-nosources-source-map',
  optimization: {
    emitOnErrors: false,
    minimize: false,
  },
  experiments: {
    outputModule: true
  },
  entry: {
    index: path.join(__dirname, './lib/index.js'),
    'lib/codePicker/': path.join(__dirname, './lib/ui/codePicker/index.js'),
    'lib/tablePicker/': path.join(__dirname, './lib/ui/tablePicker/index.js'),
    'lib/quickInsert/': path.join(__dirname, './lib/ui/quickInsert/index.js'),
    'lib/emojiPicker/': path.join(__dirname, './lib/ui/emojiPicker/index.js'),
    'lib/imagePicker/': path.join(__dirname, './lib/ui/imagePicker/index.js'),
    'lib/imageSelector/': path.join(__dirname, './lib/ui/imageSelector/index.js'),
    'lib/imageToolbar/': path.join(__dirname, './lib/ui/imageToolbar/index.js'),
    'lib/transformer/': path.join(__dirname, './lib/ui/transformer/index.js'),
    'lib/formatPicker/': path.join(__dirname, './lib/ui/formatPicker/index.js'),
    'lib/linkTools/': path.join(__dirname, './lib/ui/linkTools/index.js'),
    'lib/footnoteTool/': path.join(__dirname, './lib/ui/footnoteTool/index.js'),
    'lib/tableBarTools/': path.join(__dirname, './lib/ui/tableTools/index.js'),
    'lib/frontMenu/': path.join(__dirname, './lib/ui/frontMenu/index.js'),
  },
  output: {
    filename: '[name].js',
    library: {
      type: "module",
    },
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /(theme\-chalk(?:\/|\\)index|exportStyle|katex|github\-markdown|prism[\-a-z]*|\.theme|headerFooterStyle)\.css$/,
        use: [
          'to-string-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {importLoaders: 1}
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({stage: 0})
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'images/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].min.css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'themes',
          to: 'themes/',
          toType: 'dir',
        }
      ]
    }),
    new NodePolyfillPlugin(),
  ],

  resolve: {
    alias: {
      snapsvg: path.join(__dirname, './lib/assets/libs/snap.svg-min.js')
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node'],
    fallback: {
      fs: false,
      // path: require.resolve('path-browserify'),
      // zlib: require.resolve('browserify-zlib'),
      // stream: require.resolve('stream-browserify')
      path: require.resolve('path-browserify'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify')
    }
  }
}
