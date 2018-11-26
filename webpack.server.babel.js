import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

module.exports = {
  target: 'node',
  entry: {
    server: './src/server/index'
  },
  output: {
    path: path.join(__dirname, 'dist/server'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../',
              publicPath: '/dist'
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
      __SERVER__: JSON.stringify(true),
      __CLIENT__: JSON.stringify(false)
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    alias: {
      dist: path.resolve(__dirname, '', 'dist/'),
      store: path.resolve(__dirname, '', 'src/store/'),
      reducers: path.resolve(__dirname, '', 'src/store/reducers')
      
    }
  },
};
