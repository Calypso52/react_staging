// 这个文件给webpack看的，用的是node的语法，所以不用ES6写用CJS（common.js）写
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api1', {  // 遇见/api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000',  // 请求转发给谁
            changeOrigin: true,  // 控制服务器收到的请求头中Host字段的值
            pathRewrite: {'^/api1': ''}  // 重写请求路径。必做。因为服务器只认/student，但是前端为了区分不同代理，所以加了api1，发送的时候再替换成空串
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        }),
    )
}