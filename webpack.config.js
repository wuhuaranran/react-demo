const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const theme = require('./theme');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
        common: ['react', 'antd', 'blueimp-md5', 'whatwg-fetch', 'react-dom', 'react-redux']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode: 'development',
    output: {
        filename: '[name]_[hash:8].bundle.js',
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
                                libraryName: 'antd-mobile',
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
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
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
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false
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
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'public/images/',
                            limit: 5000,
                            name: '[name].[hash:8].[ext]'
                        }
                    }/* ,
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    } */
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
