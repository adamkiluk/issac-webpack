const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",     //3. INJECT TO DOM
                    "css-loader",       //2. CSS TO COMMONJS
                    "sass-loader"       //1. SCSS TO CSS
                ],
            },
        ],
    },
}