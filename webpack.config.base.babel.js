import path from 'path';
import webpack from 'webpack';

export default {
  context: path.resolve(path.join(__dirname, 'public')),
  entry: [
    './index',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, 'public', 'assets')),
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
