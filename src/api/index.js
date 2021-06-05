const { http } = require('../utils')

// 获取彩虹屁
const getRainbowFart = () => http.request({
    url: 'https://chp.shadiao.app/api.php'
})

module.exports = {
    getRainbowFart
}