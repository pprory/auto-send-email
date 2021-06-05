# 定时彩虹屁发送服务

## 使用指南

1. `npm install` 安装所需依赖

2. 在项目根目录新建local_config.js文件后将此段内容粘贴进去并修改为你的配置
```javascript
module.exports = {
    auth: {
        user: '****@qq.com',  // 发件人邮箱
        pass: "****",   //   此处应为你的授权码(不知道如何获取邮箱pass的朋友可自行Google)
    },
    to: '1****@example.com, 2*****@example.com',     // 收件人邮箱, 批量账号间以', '分隔

    from: `匿名<${`****@qq.com`}>`,  // 来信人(与发件人邮箱相同即可)
    subject: `今日份彩虹屁☀,请签收~`, // 邮件标题

    hour: 9,  // 发件时间(时)
    minute: 0, // 发件时间(秒)
}

```
3. `npm run start` 启动服务,成功后将在每天9点发送彩虹屁邮件。