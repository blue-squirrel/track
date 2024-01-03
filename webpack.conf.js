module.exports = {
    entry : './src/index.js',  // 配置打包入口文件
    output : { // 配置打包完成的出口文件 路径 
      path : path.resolve(__dirname , './dist/'),
      filename : 'main.js'
    }
  }
  