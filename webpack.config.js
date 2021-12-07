/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */

const path = require("path");

module.exports = {
  // 如果没有htmlwebpackplugin，那么webpack命令生成的文件只包含bundle.js
  entry: "./src/indexPatch.js",
  output: {
    // publicPath
    publicPath: "",
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    // 静态资源文件夹
    contentBase: "www",
  },
};
