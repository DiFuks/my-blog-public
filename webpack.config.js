const Encore = require('@symfony/webpack-encore');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CopyPlugin = require('copy-webpack-plugin');

dotenv.config();

Encore
    .setOutputPath('public')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .addEntry('main', path.resolve(__dirname, './src/app/index.tsx'))
    .enableReactPreset()
    .enableTypeScriptLoader()
    .enableSingleRuntimeChunk()
    .configureBabel(config => {
        config.plugins = [
            'babel-plugin-styled-components',
            '@babel/plugin-syntax-dynamic-import',
        ];
    })
    .configureManifestPlugin(config => {
        config.fileName = 'assets-manifest.json'
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
        'SITE_URL': JSON.stringify(process.env.SITE_URL),
        'DISQUS_SHORTNAME': JSON.stringify(process.env.DISQUS_SHORTNAME),
        'SOCKET_URL': JSON.stringify(process.env.SOCKET_URL),
    }))
    .addPlugin(new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        cwd: process.cwd(),
    }))
    .addPlugin(new CopyPlugin([{
        from: 'src/assets/favicon/*.*',
        to: '.',
        flatten: true,
        force: true,
    }]))
    .addLoader({
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
    })
;

const config = Encore.getWebpackConfig();

config.resolve.plugins = [new TsconfigPathsPlugin()];

module.exports = config;
