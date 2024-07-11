import axios from '../index.js'
import { ElMessage } from "element-plus";

export const getSeverityTextList = async (query) => {
    try {
        const {data} = await axios.get('/log/levels', {
            params: {
                query: query
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取日志级别列表失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取日志级别列表失败')
        return null
    } catch (e) {
        ElMessage.error(`获取日志级别列表失败, ${e.message}`)
    }
    return null
}

export const getLogList = async (logQueryDto) => {
    try {
        const {data} = await axios.get('/logs', {
            params: {
                pageNum: logQueryDto.pageNum,
                pageSize: logQueryDto.pageSize,
                serviceName: logQueryDto.serviceName,
                traceId: logQueryDto.traceId,
                keyword: logQueryDto.keyword,
                keywordNotIncluded: logQueryDto.keywordNotIncluded,
                severityText: logQueryDto.severityText,
                startTimestamp: logQueryDto.startTimestamp,
                endTimestamp: logQueryDto.endTimestamp
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取日志列表失败, ${data.message}`)
            return null
        }
    } catch (e) {
        ElMessage.error(`获取日志列表失败, ${e.message}`)
    }
    return null
}
