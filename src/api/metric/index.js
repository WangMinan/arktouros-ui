import axios from "../index.js"
import { ElMessage } from "element-plus";

export const getMetricList = async (metricQueryDto) => {
    try {
        const {data} = await axios.get('/metrics', {
            params: {
                serviceName: metricQueryDto.serviceName,
                metricNameLimit: metricQueryDto.metricNameLimit,
                startTimeStamp: metricQueryDto.startTimeStamp,
                endTimeStamp: metricQueryDto.endTimeStamp
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取数值列表失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取数值列表失败')
        return null
    } catch (e) {
        ElMessage.error(`获取数值列表失败, ${e.message}`)
    }
    return null
}

export const deleteAllMetricsFromDB = async () => {
    try {
        const {data} = await axios.delete('/metrics')
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`删除所有数值失败, ${data.message}`)
            return null
        }
        ElMessage.error('删除所有数值失败')
        return null
    } catch (e) {
        ElMessage.error(`删除所有数值失败, ${e.message}`)
    }
    return null
}
