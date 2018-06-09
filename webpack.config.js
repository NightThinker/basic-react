const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index',
  output: {
    path: '',
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'dist')
  }
};