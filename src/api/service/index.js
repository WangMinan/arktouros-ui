import axios from '../index.js'
import { ElMessage } from "element-plus";

export const getNamespaceList = async (query) => {
    try {
        const {data} = await axios.get('/service/namespace', {
            params: {
                query: query
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取命名空间列表失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取命名空间列表失败')
        return null
    } catch (e) {
        ElMessage.error(`获取命名空间列表失败, ${e.message}`)
    }
    return null
}

export const getServiceList = async (baseQueryDto) => {
    try {
        const {data} = await axios.get('/service', {
            params: {
                query: baseQueryDto.query,
                namespace: baseQueryDto.namespace,
                pageNum: baseQueryDto.pageNum,
                pageSize: baseQueryDto.pageSize
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取服务列表失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取服务列表失败')
        return null
    } catch (e) {
        ElMessage.error(`获取服务列表失败, ${e.message}`)
    }
    return null
}
