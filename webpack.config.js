const path = require('path');
const Copyplugin = require("copy-webpack-plugin");
const Htmlplugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool:'cheap-module-source-map',
  entry: {
    popup: path.resolve("src/popup/popup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Copyplugin({
      patterns: [
        {
          from: path.resolve("src/manifest.json"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new Htmlplugin({
      title: "React Extension",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
};