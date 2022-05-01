module.exports = {
  // outputDir: "../src/main/resources/static",
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
      },
    },
  },
};
