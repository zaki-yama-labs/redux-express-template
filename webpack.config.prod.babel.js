import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
});
