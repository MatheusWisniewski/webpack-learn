const path = require("path");
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: [
            "./src/main.js"
        ]
    },
    mode: "development",
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            name: "[name].[hash:8].html",
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}