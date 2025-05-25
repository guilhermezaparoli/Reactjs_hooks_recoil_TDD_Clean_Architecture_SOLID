/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


/** @type {import('webpack').Configuration} */ //
module.exports = {
    mode: "development",
    entry: "./src/main/index.tsx",
    output: {
        path: path.join(__dirname, "public/js"),
        publicPath: "/public/js",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "scss"],
        alias: {
            "@": path.join(__dirname, "src")
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss?$/,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                },
                {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    devServer: {
        static: {
            directory: "./public"
        },
        devMiddleware: {
            writeToDisk: true
        },
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}