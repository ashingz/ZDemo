import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
let service = axios.create({
    baseURL: process.env.BASE_URL, // api的base_url
    timeout: 1000
})


// request拦截器
service.interceptors.request.use(config => {

}, error => {
    Promise.reject(error)
})


// response拦截器
service.interceptors.response.use(response => {
    // 接口正常返回码code: 200
    const res = response.data
    if (res.code !== 200) {
        Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject('error')
    } else {
        return res
    }
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})
export default service
