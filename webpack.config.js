const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        liveReload: true,
        hot: false,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new EslintWebpackPlugin({ fix: true }),
        new MiniCssExtractPlugin(),
    ]
}

module.exports = function (env, argv) {
    conf.devtool = (argv.mode === 'production') ? 'none' : 'eval-source-map';
    return conf; 
}
