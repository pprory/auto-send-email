/**
 * @author Peng Pan
 * @Date 2021年6月5日
 * @description 发送邮件模块
 */
const nodemailer = require("../node_modules/nodemailer")
const config = require('../local_config')

async function main(message) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: '587',
        secure: false,
        auth: {
            user: config.auth.user,
            pass: config.auth.pass
        }
    })

    await transporter.sendMail({
        from: config.from,
        to: config.to,
        subject: config.subject,
        text: message,
    })

    console.log('发送成功~');
}

module.exports = main