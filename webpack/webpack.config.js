const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  watch: true,
  resolve: {
    alias: {
      // Your custom aliases here
      helpers: path.resolve(__dirname, "src/helpers/"),
      models: path.resolve(__dirname, "src/models/"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname),
  },
};
