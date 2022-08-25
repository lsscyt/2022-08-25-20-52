const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 8090, // 启动端口号
    open: true, // 启动后是否自动打开网页
    host: "localhost",

  },
});
