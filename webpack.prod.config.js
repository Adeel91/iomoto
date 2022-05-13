const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, "./.env.production"),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
      (compiler) => {
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin({
          terserOptions: {
            compress: {},
          },
        }).apply(compiler);
      },
    ],
  },
});
