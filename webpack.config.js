const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require("./package.json");

const libraryName = pkg.name;

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    [libraryName]: "./src/index.js",
    [`${libraryName}.min`]: "./src/index.js"
  },
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};
