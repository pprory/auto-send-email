const axios = require('../../node_modules/axios').default

const http = axios.create({
    baseURL: ''
})

module.exports = http