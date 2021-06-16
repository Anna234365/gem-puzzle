const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg|svg|ico)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "GEM PUZZLE",
      favicon: "./src/assets/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
};
