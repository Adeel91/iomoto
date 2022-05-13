const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
  output: {
    path: path.join(__dirname, "./build"),
    filename: "[id].bundle.js",
    publicPath: "/",
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|ico)$/,
        use: ["file-loader?name=assets/[name].[ext]"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      scriptLoading: "blocking",
      favicon: "public/favicon.ico",
      manifest: "public/manifest.json",
    }),
  ],
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
};
