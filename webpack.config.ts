// @ts-check
import path from 'path'
import webpack, { Configuration } from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import dotenv from 'dotenv'

import 'webpack-dev-server'

dotenv.config()

const devConfig: Pick<Configuration, 'devServer'> = {
    devServer: {
        allowedHosts: 'all',
        port: 5000,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'static'),
        },
    },
}

const optimizationConfig: Pick<Configuration, 'optimization'> = {
    optimization: {
        splitChunks: {
            chunks: 'initial',
            minChunks: 1,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                },
                icons: {
                    test: /[\\/]src[\\/]assets[\\/]icons[\\/]/,
                    name: 'icons',
                    chunks: 'all',
                },
            },
        },
    },
}

interface WebpackArgumentsProps {
    mode: 'development' | 'production'
    hot: boolean
    env: {
        WEBPACK_SERVE: boolean
    }
}

module.exports = function build(_: any, args: WebpackArgumentsProps) {
    const isDevelopment = args.mode === 'development'

    const config: Configuration = {
        ...devConfig,
        ...optimizationConfig,
        entry: path.join(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: isDevelopment
                ? 'static/js/[name].js'
                : 'static/js/[name].[contenthash:8].js',
            sourceMapFilename: isDevelopment
                ? 'static/js/[name].map'
                : 'static/js/[name].[contenthash:8].map',
            chunkFilename: isDevelopment
                ? 'static/js/[name].js'
                : 'static/js/[id].[contenthash:8].js',
            publicPath: '/',
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                    },
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: () => {
                                if (process.env.NODE_ENV === 'development')
                                    return '[path][name].[ext]'
                                return 'images/[hash]-[name].[ext]'
                            },
                        },
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(process.env),
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
            }),
        ],
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            extensions: [
                '.js',
                '.jsx',
                '.json',
                '.ts',
                '.tsx',
                '.png',
                '.tff',
                '.scss',
            ],
            alias: {
                react: path.join(__dirname, 'node_modules', 'react'),
                '@app': path.join(__dirname, './src'),
                '@images': path.join(__dirname, './src/assets/images'),
                '@ds': path.join(
                    __dirname,
                    './src/components/DesignSystem/index'
                ),
                '@components': path.join(__dirname, './src/components'),
                '@pages': path.join(__dirname, './src/pages'),
                '@services': path.join(__dirname, './src/services'),
                '@config': path.join(__dirname, './config'),
                '@constants': path.join(__dirname, './config/constants'),
                '@types': path.join(__dirname, './config/type'),
            },
        },
    }

    return config
}
