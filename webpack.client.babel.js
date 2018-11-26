import webpack from 'webpack';
import path from 'path';
import { ReactLoadablePlugin } from 'react-loadable/webpack';

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
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: ''
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __SERVER__: JSON.stringify(false),
      __CLIENT__: JSON.stringify(true)
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
    })
  ]
};
