const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const title = 'Pantone Connect';
const template = 'src/templates/index.html';

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
  },
  devServer: {
    contentBase: './dist',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title,
      template,
    }),
  ],
};
