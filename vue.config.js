module.exports = {
  publicPath: '.',
  // baseUrl: '.',
  assetsDir: './assets',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/*': {
        target: 'http://localhost:9091',
        ws: false,
        changeOrigin: true,
      },
    },
  },
};
