const webpack = require('webpack');
const path = require('path');
// const { ReactLoadablePlugin } = require('./webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: './src/index',
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
                'react',
                ['es2015', { modules: false }]
            ],
            plugins: [
            //   'syntax-dynamic-import',
            //   'transform-class-properties',
            //   'transform-object-assign',
            //   require.resolve('./babel'),
            ],
          }
        },
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    // alias: {
    //   'react-loadable': path.resolve(__dirname, 'src'),
    // },
  },
  plugins: [
    // new ReactLoadablePlugin({
    //   filename:  path.resolve(__dirname, 'example', 'dist', 'react-loadable.json'),
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new BundleAnalyzerPlugin()
  ]
};
