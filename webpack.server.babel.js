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
    })
  ]
};
