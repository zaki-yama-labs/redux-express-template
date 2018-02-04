import path from 'path';
import webpack from 'webpack';

export default {
  context: path.resolve(path.join(__dirname, 'public')),
  entry: [
    './index',
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.join(__dirname, 'public', 'assets')),
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(path.join(__dirname, 'public')),
          path.resolve(path.join(__dirname, 'node_modules/@salesforce/design-system-react')),
        ],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.min\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'lds/',
        },
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
