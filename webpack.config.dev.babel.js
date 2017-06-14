import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  entry: [
    'webpack-hot-middleware/client',
  ],

  // Configuration for dev server
  devServer: {
    contentBase: path.resolve(path.join(__dirname, 'public')),
    port: 3000,
  },

  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
