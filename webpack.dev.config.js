const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: false,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.development"),
    }),
  ],
});
