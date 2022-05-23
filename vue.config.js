module.exports = {
    outputDir: "C://Users//Ted//Desktop//Spring-Socket-Study//src//main//resources//static",
    devServer: {
      proxy: {
        "/": {
          target: "http://202.31.200.219:8080",
          pathRewrite: { "^/": "" },
          changeOrigin: true,
        },
      },
    },
  };
  