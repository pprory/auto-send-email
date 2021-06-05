const { getRainbowFart } = require('./api')
const sendMail = require('./send_mail')
const { updateRainBowFartFile } = require('./utils')
const schedule = require('node-schedule');
const config = require('../local_config')
function main() {
    schedule.scheduleJob({ hour: config.hour, minute: config.minute }, () => {
        getRainbowFart().then(res => {
            sendMail(res.data)
            updateRainBowFartFile(res.data)
        })
    });

    console.log('彩虹屁邮件服务已经开启~')
}

main()