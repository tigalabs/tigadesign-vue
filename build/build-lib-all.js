/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 全量打包配置
 */

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./build-base.js');

module.exports = webpackMerge(webpackBaseConfig, {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: 'tiga-ui.min.js',
    library: 'tiga-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: []

})
