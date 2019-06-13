const Encore = require('@symfony/webpack-encore');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

dotenv.config();

Encore.setOutputPath('public')
  .setPublicPath('/')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .addEntry('main', path.resolve(__dirname, './src/app/index.tsx'))
  .enableReactPreset()
  .enableTypeScriptLoader()
  .enableSingleRuntimeChunk()
  .configureBabel(babelConfig => {
    babelConfig.plugins = [
      'babel-plugin-styled-components',
    ];
  })
  .addPlugin(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/app/index.html'),
      env: Encore.isProduction() ? 'production' : 'development',
      inject: 'body',
      minify: {
        collapseWhitespace: Encore.isProduction(),
      },
    })
  )
  .addPlugin(new webpack.DefinePlugin({
    'API_URL': JSON.stringify(process.env.API_URL),
  }))
  .addPlugin(new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: true,
    cwd: process.cwd(),
  }))
  .addLoader({
    test: /\.tsx?$/,
    enforce: 'pre',
    loader: 'tslint-loader',
  })
;

const config = Encore.getWebpackConfig();

config.resolve.plugins = [new TsconfigPathsPlugin()];

module.exports =config;
