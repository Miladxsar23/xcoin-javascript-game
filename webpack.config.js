const path = require("path");
module.exports = {
  entry: "./src/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
};
