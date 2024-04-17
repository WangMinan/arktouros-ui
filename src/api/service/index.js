import axios from '../index.js'
import { ElMessage } from "element-plus";

export const getServiceList = async (baseQueryDto) => {
    try {
        const {data} = await axios.post('/service', baseQueryDto)
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
