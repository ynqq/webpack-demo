const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')


module.exports = (env) => {
    const NODE_ENV = process.env.NODE_ENV
    const envPath = path.resolve(__dirname, './.env.' + env.mode)
    let smp = new SpeedMeasureWebpackPlugin()
    const config = smp.wrap({
        entry: './src/app/index.js',
        mode: 'production',
        output: {
            filename: 'js/[name].[hash].js',
            path: path.resolve(__dirname, './dist')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: [NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        optimization: {
            minimize: false
        },
        performance: {
            hints: false,
        },
        devServer: {
            static: {
                directory: path.join(__dirname, './public')
            },
            compress: true,
            port: 9999
        },
        plugins: [
            new CleanWebpackPlugin(),
            new DefinePlugin( // 将process添加到浏览器
                { 'process.env': require(envPath) }
            ),
            new HtmlWebpackPlugin({
                template: `./public/index.html`,
                filename: 'index.html'
            })
        ]
    })
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    )
    return config
}