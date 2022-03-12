const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/scripts/app.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "/static",
    hot: true,
    liveReload: false,
    compress: true,
    port: 9000,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "xcoin game",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "dist"),
    clean: true,
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: ["react-hot-loader/webpack"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
