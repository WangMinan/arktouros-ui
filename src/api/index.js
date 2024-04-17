import axios from 'axios'
import { start, stop } from '@/utils/nprogress.js'
import router from '@/router/index.js'
import { ElMessage } from 'element-plus'

// 创建一个axios实例
const _axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

// 请求拦截器
_axios.interceptors.request.use(
    (req) => {
        start()
        return req
    },
    (err) => {
        return Promise.reject(err)
    }
)

// 响应拦截器
_axios.interceptors.response.use(
    async (resp) => {
        // 如果resp中没有data或data中没有code则直接返回
        stop()
        if (resp.data.code === undefined) {
            ElMessage.error('后端服务器异常,请联系管理员')
        } else {
            // 对返回的code进行处理
            switch (resp.data.code) {
                case 2000:
                    return resp
                case 400:
                    // 通用请求错误
                    ElMessage.error(resp.data.msg)
                    return Promise.reject(resp)
                case 4040:
                    // 请求的资源不存在
                    ElMessage.error('您的请求的资源不存在,当前页面将被刷新')
                    router.push(router.currentRoute.value.fullPath).then(r => {
                        return r
                    })
                    break
                case 5000:
                    // 后端服务异常
                    ElMessage.error('后端服务异常,当前页面将被刷新,若无效请联系管理员')
                    router.push(router.currentRoute.value.fullPath).then(r => {
                        return r
                    })
                    break
                default:
                    // 未知情况
                    return resp
            }
        }

    },
    (err) => {
        stop()
        ElMessage.error('后端服务器异常,请联系管理员')
        return Promise.reject(err)
    }
)

export default _axios
