const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'index.js',
    path: __dirname + '/build',
    /*La linea de abajo ayuda en el modo de desarrollo a redireccionar todo a index.js desde webpack
    Solo usar en fase de desarrollo al crear el build retirar la linea o comentarla*/
    //publicPath: '/'
  },
  devServer: {
   historyApiFallback: true,
},
  module: {
    rules: [
      {
        test: /\.js?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/i,
        /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g|svg|webp)$/i,
        use: ["file-loader?name=Assets/[name].[ext]","image-webpack-loader"],
      },
      {
        test: /\.(woff|ttf|otf)$/i,
        use:["file-loader?name=Fonts/[name].[ext]"]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    /*new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["main"],
      hash: false,
    }),*/
    new MiniCssExtractPlugin(),
  ],
};
