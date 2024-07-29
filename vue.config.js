const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'), // 루트 디렉토리의 index.html 파일을 사용하도록 경로 설정
        filename: 'index.html',
        inject: 'body'
      })
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    watchFiles: ['src/**/*', 'index.html'],
  },
  outputDir: path.resolve(__dirname, 'dist'),
});
