const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: "development",
  entry: ["./src/index.js", './src/styles/main.scss', './src/index.html'],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
            }
          }
        ]
      },
    ]
  }
};
