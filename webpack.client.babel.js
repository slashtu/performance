import webpack from 'webpack';
import path from 'path';
import ManifestPlugin from 'webpack-manifest-plugin';
import {ReactLoadablePlugin} from 'react-loadable/webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

module.exports = {
  entry: {
    main: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
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
              ['es2015', {modules: false}]
            ],
            plugins: [
              'syntax-dynamic-import',
              'transform-class-properties',
              'react-loadable/babel'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(__dirname, 'dist', 'react-loadable.json')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      async: 'common',
      children: true,
      deepChildren: true,
      minChunks(module, count) {
        console.log(module.resource);
        console.log(count);
        return count > 1;
      }
    }),
    new ManifestPlugin({
      fileName: path.resolve(__dirname, 'webpack-assets.json')
    })
    // new BundleAnalyzerPlugin()
  ]
};
