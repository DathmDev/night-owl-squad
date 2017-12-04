/*
    ./webpack.config.js
*/
// Import Webpack npm module
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader",
    publicPath: "/dist"
})

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                // exclude: /src/,
                use: cssConfig
            },
            {
                test: /\.scss$/,
                // exclude: /src/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "scss-loader",
                    publicPath: "/dist"
                }),
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
              test: /\.(png|jpg|ico|gif|svg|eot|ttf|woff|woff2)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
              loader: 'url-loader',
              options: {
                limit: 100000,
                publicPath: "/"
              }
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        compress: true,
        hot: true,
        port: '3000',
        stats: "errors-only",
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Night Owl Squad',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './public/index.html'
        }),
        new ExtractTextPlugin({
            filename: "style.bundle.css",
            disable: !isProd,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
            , sourceMap: true
        })
    ],
}

