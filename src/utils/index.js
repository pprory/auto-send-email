const fs = require('fs')
const moment = require('moment')
const path = require('path')

function error(text) {
    fs.appendFileSync(path.join(__dirname + '../../../log/error.log'), JSON.stringify({
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        error: text
    }, null, 2) + '\n')
}

function success(text) {
    fs.appendFileSync(path.join(__dirname + '../../../log/successful.log'), JSON.stringify({
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        text: text
    }, null, 2) + '\n')
}

/**
 * 
 * @param {string} text 日志内容
 * @param {boolean} isError 是否为错误日志
 */
function setLog(text, isError = false) {
    const func = isError ? error : success
    func(text)
}

/**
 * @description 更新彩虹屁词库
 */
function updateRainBowFartFile(text) {
    fs.appendFile(path.join(__dirname + '../../rainbow-fart'), '==>>>' + text + '\n', function (err) {
        if (err) {
            setLog(err, true)
        } else {
            setLog('正常写入')
        }
    })
}

module.exports = {
    setLog,
    http: require('./http'),
    updateRainBowFartFile
}