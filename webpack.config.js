const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { RawSource } = require("webpack-sources");

const sharp = require("sharp");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app");
const dirShared = path.join(__dirname, "shared");
const dirStyles = path.join(__dirname, "styles");
const dirNode = "node_modules";

class SharpWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "SharpWebpackPlugin",
      (compilation, callback) => {
        const images = Object.keys(compilation.assets).filter((asset) =>
          /\.(jpe?g|png|gif|svg|webp)$/i.test(asset)
        );

        Promise.all(
          images.map((image) => {
            const imgBuffer = compilation.assets[image].source();

            return sharp(imgBuffer)
              .toBuffer()
              .then((optimizedBuffer) => {
                compilation.assets[image] = new RawSource(optimizedBuffer);
              });
          })
        )
          .then(() => {
            callback();
          })
          .catch((err) => {
            console.error(err);
            callback();
          });
      }
    );
  }
}

module.exports = {
  // this is the entry point of the application & of the styles
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],

  // this prevents us from having to go levels back when importing
  resolve: {
    modules: [dirApp, dirShared, dirStyles, dirNode],
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./shared",
          to: "",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new SharpWebpackPlugin(),

    new CleanWebpackPlugin(),
  ],

  //
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
        loader: "file-loader",
        options: {
          name(file) {
            return "[hash].[ext]";
          },
        },
      },

      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/,
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
