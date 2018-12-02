const path = require('path');
const SassPlugin = require('sass-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new SassPlugin(
      { './src/styles/main.scss': 'styles/main.css' },
      process.env.NODE_ENV,
      {
        sourceMap: true,
        sass: { outputStyle: 'compressed' },
        autoprefixer: false
      }
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Vanilla Boilerplate'
    }),
    new CopyWebpackPlugin([{
      from: 'src/images/',
      to: 'images'
    }]),
    new ImageminWebpWebpackPlugin({
      config: [{
        test: /\.(jpe?g|png)$/,
        method: 6,
        resize: {
          width: 1920
        }
      }],
      detailedLogs: false,
      strict: true
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 70,
          progressive: true
        })
      ],
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  output: {
    filename: '[name].hotsite.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
