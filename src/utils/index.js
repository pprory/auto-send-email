const fs = require('fs')
const moment = require('moment')
const path = require('path')


/**
 * @description 更新彩虹屁词库
 */
function updateRainBowFartFile(text) {
    fs.appendFile(path.join(__dirname + '../../rainbow-fart'), '==>>>' + text + '\n', function (err) {
        if (err) {
            fs.appendFileSync(('error.log'), JSON.stringify({
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                error: err
            }, null, 2) + '\n')
        }
    })
}

module.exports = {
    http: require('./http'),
    updateRainBowFartFile
}