const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // 上下文目录
  context: process.cwd(),
  entry: './src/index.js', // 配置打包入口文件
  output: {
    // 配置打包完成的出口文件 路径
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  // 启动服务时，会自动将打包好的文件 通过script插入到html中
  devServer : {  // 
    host : 'localhost', // 服务启动的 ip 地址 localhost 即本地
    port : '3001', // 开启的端口
    open : true, // 是否开启服务后 打开浏览器
    onBeforeSetupMiddleware: (devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      devServer.app.get("/success", function (req, res) {
        res.json({ id: 1 });
      });

      devServer.app.post("/error", function (req, res) {
        res.sendStatus(500);
      });
    },
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',  // 生成的文件名
      template : '/index.html', // 将哪个模板作为html
      inject: "head", // head or body,
      scriptLoading: "blocking",
    })
  ]
};
