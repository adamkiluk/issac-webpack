const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development", 
    devtool: "inline-nosources-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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