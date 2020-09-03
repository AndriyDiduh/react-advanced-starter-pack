/**
 * Babel - transcripts code to older format so it can run on many systems
 * Style loader - moves CSS to <HEAD>
 * Css loader - add ability to   import "style.css"
 *
 * 'source-map' - create separate file We can delete, in browser Dev tool it will display Source code from ./src folder
 * 'eval-source-map' - same as 'source-map' but put all the data to main.js ( bundle.js)
 *  set this to FALSE to not generate or manually delete after build is made ( We do not need Source Map for Production )
 *
 * Notes
 * We need to have installed Babel-register and out webpack config should have .babel in its file name
 * in order to make ES6 imports to work, example "import { resolve as _resolve } from 'path'"
 */

import { resolve as _resolve } from 'path'
import { HashedModuleIdsPlugin, ProvidePlugin } from 'webpack'

//Plugins
import HTMLWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin' // removes all unused files from BUILD folder from dist
import CopyWebpackPlugin from 'copy-webpack-plugin'

// Configure - for both Production and Development compile
let conf = {
    entry: _resolve(__dirname, './src/index.ts'),
    devServer: {
        overlay: false,
        contentBase: _resolve(__dirname, './dist'),
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.tsx$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.geojson$/,
                loader: 'file-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(png|gif|jpg|jpe?g|svg)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: _resolve(__dirname, 'src/'),
                            outputPath: '',
                            publicPath: '../',
                            useRelativePaths: true,
                        },
                    },
                    'img-loader',
                ],
            },
            {
                test: /\.mp4$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: _resolve(__dirname, 'src/'),
                    outputPath: '',
                    publicPath: '../',
                    useRelativePaths: true,
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // need to replace this '../../../css/style.css' while Importing to this 'Css/style.css'
        // changes also required in tsconfig.json
        alias: {
            Src: _resolve(__dirname, './src'),
            Api: _resolve(__dirname, './src/api'),
            Components: _resolve(__dirname, './src/components'),
            Screens: _resolve(__dirname, './src/screens'),
            Actions: _resolve(__dirname, './src/flux/actions'),
            Store: _resolve(__dirname, './src/flux/store'),
            Imgs: _resolve(__dirname, './src/styles/img'),
            Scss: _resolve(__dirname, './src/styles/scss'),
            Content: _resolve(__dirname, './src/content'),
            Types: _resolve(__dirname, './src/types'),
        },
    },
    output: {
        /* filename: 'main.js', */
        // Generated Contenthash means that It will be different after file was changed
        // forces browser to download New file and do not use Old saved in Cache
        //filename: '[name].[contenthash].bundle.js',
        filename: '[id].[contenthash].bundle.js',
        path: _resolve(__dirname, './dist'),
        publicPath: '',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `mod.${packageName.replace('@', '')}`
                    },
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            hash: true,
            template: _resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
        }),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            {
                from: _resolve(__dirname, './src/manifest/'),
                to: '.',
            },
            // To Fix React Router to Work on Netlify
            {
                from: _resolve(__dirname, './src/_redirects'),
                to: '.',
            },
        ]),
    ],
}

// add switch to Hide original code better
export default (env, options) => {
    /**
     * SWITCH between PRODUCTION deploy and DEVELOPMENT server MODE
     * Production, use Babel and Uglify and do Not generate Any Map
     * Development, use Babel and generate Source Map for debugging
     */

    // For Production do Not generate Map
    let production = options.mode === 'production'
    conf.devtool = production ? false : 'eval-source-map'

    return conf
}
