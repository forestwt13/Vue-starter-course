const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'), //入口文件谁知
  output: { //输出设置
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}