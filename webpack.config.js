import path from "node:path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"

module.exports = {
    mode: "development",
    entry: "./src/main/index.tsx",
    output: {
        path: path.join(__dirname, "public/js"),
        publicPath: "/public/js",
        filename: "bundle.js"
    },
    resolve: {
        extension: [".ts", ".tsx", "js"],
        alias: {
            "@": path.join(__dirname, "src")
        }
    },
    devServer: {
        contentBase: "./public",
        writeToDisk: true,
        historyApiFallback: true
    },
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}