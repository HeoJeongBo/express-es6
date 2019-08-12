const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/app.js"],
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app.js"
  },
  target: "node",
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  optimization: { minimizer: [] }
};
