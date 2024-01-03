const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/load.js', // 配置打包入口文件
  output: {
    // 配置打包完成的出口文件 路径
    path: __dirname + '/dist/',
    filename: 'main.js',
  },
  devServer : {  // 
    host : 'localhost', // 服务启动的 ip 地址 localhost 即本地
    port : '3001', // 开启的端口
    open : true // 是否开启服务后 打开浏览器
  },
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',  // 生成的文件名
      template : '/index.html' // 将哪个模板作为html
    })
  ]
};
