const path = require('path')

const { DefinePlugin } = require('webpack')

const { VueLoaderPlugin }  = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')

const envDefaults = {
  prod: false,
}

module.exports = (env = envDefaults) => ({
  mode    : env.prod === true ? 'production' : 'development',
  devtool : env.prod ? false : 'source-map',
  entry   : path.resolve(__dirname, './src/main.ts'),

  output: {
    path       : path.resolve(__dirname, './dist'),
    publicPath : '/dist/',
  },

  resolve: {
    extensions: [
      '.ts', '.js', '.vue', '.json'
    ],

    alias: {
      'vue': '@vue/runtime-dom',
    },

    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,

        use: [
          'babel-loader',
          {
            loader: 'ts-loader',

            options: {
              appendTsSuffixTo: [
                /\.vue$/
              ],
            },
          },
        ],
      },
      {
        test : /\.vue$/,
        use  : 'vue-loader',
      },
      {
        test: /\.png$/,

        use: {
          loader: 'url-loader',

          options: {
            limit: 8192,
          },
        },
      },
      {
        test : /\.css$/,
        use  : [
          'style-loader', 'postcss-loader'
        ],
      },
      {
        test : /\.jsx?$/,
        use  : [
          'babel-loader', 'astroturf/loader'
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.prod === true ? 'production' : 'development'),
      },

      '__VUE_OPTIONS_API__'   : JSON.stringify(true),
      '__VUE_PROD_DEVTOOLS__' : JSON.stringify(env.prod !== false),
    }),
  ],


})
