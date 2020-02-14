module.exports = {
  productionSourceMap: false,
  parallel: false,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: 'static',
  runtimeCompiler: false,
  devServer: {
    port: 8080,
    proxy: {
      //默认的api路径就直接写根目录，后期调试在改为/api
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        },
      },

    },
  },
}