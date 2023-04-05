process.env.BABEL_ENV = 'renderer'


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
    'lib/codePicker/index': path.join(__dirname, './lib/ui/codePicker/index.js'),
    'lib/tablePicker/index': path.join(__dirname, './lib/ui/tablePicker/index.js'),
    'lib/quickInsert/index': path.join(__dirname, './lib/ui/quickInsert/index.js'),
    'lib/emojiPicker/index': path.join(__dirname, './lib/ui/emojiPicker/index.js'),
    'lib/imagePicker/index': path.join(__dirname, './lib/ui/imagePicker/index.js'),
    'lib/imageSelector/index': path.join(__dirname, './lib/ui/imageSelector/index.js'),
    'lib/imageToolbar/index': path.join(__dirname, './lib/ui/imageToolbar/index.js'),
    'lib/transformer/index': path.join(__dirname, './lib/ui/transformer/index.js'),
    'lib/formatPicker/index': path.join(__dirname, './lib/ui/formatPicker/index.js'),
    'lib/linkTools/index': path.join(__dirname, './lib/ui/linkTools/index.js'),
    'lib/footnoteTool/index': path.join(__dirname, './lib/ui/footnoteTool/index.js'),
    'lib/tableBarTools/index': path.join(__dirname, './lib/ui/tableTools/index.js'),
    'lib/frontMenu/index': path.join(__dirname, './lib/ui/frontMenu/index.js'),
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
        exclude: [
          path.resolve(__dirname, 'lib/ui'),
        ],
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
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'lib/ui'),
        ],
        use: [
          'style-loader',
          'css-loader',
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
      filename: '[name].min.css',
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
