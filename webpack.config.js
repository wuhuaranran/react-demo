const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./theme');
// const { injectBabelPlugin } = require('react-app-rewired');

module.exports = {
    entry: {
        app: ["babel-polyfill", path.resolve(__dirname, "src/index.js")],
        common: ['react', 'antd', 'blueimp-md5', 'whatwg-fetch', 'react-dom', 'react-redux']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        // proxy: {
        //     "/api": {
        //         target: BASE_URL,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^/api": ""
        //         }
        //     }
        // },
        inline: true
    },
    mode: 'development',
    output: {
        publicPath: '/',
        filename: 'public/js/[name].[hash:8].js',
        chunkFilename: 'public/js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // src文件
            filename: 'index.html'// dist文件
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    plugins: [
                        [
                            'import',
                            {
                                libraryName: 'antd',
                                style: true
                            }
                        ],
                        'transform-decorators-legacy',
                        'syntax-dynamic-import'
                    ]
                }
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]--[hash:base64:5]"
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'public/images/',
                            limit: 5000,
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            // assets: path.resolve(__dirname, 'src/assets'),
            // images: path.resolve(__dirname, 'src/assets/images'),
            // utils: path.resolve(__dirname, 'src/utils'),
            pages: path.resolve(__dirname, 'src/pages'),
            src: path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src/components')
        }
    }
};
