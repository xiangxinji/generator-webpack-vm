
const packageJSON = require('../package.json')

module.exports = {
    // rem 转换大小
    remUnit : 41.4 ,
    // rem 最大小数位
    remPrecision : 8,
    // image 转换的大小 (如果图片的大小 < 这个值, 就会被转换成base64 )
    imageToBase64Limit : 8192 ,
    // 开发服务器的端口
    devServerPort : 19990 ,
    // 开发服务器的主机
    devServerHost : '0.0.0.0' ,
    // 版本号
    version : packageJSON.version
}
