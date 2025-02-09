import axios from '../index.js'
import { ElMessage } from "element-plus";

export const getEndPointAndTraceIdListByServiceName = async (endpointsQueryDto) => {
    try {
        const {data} = await axios.get('/trace/endPoints', {
            params: {
                serviceName: endpointsQueryDto.serviceName,
                pageNum: endpointsQueryDto.pageNum,
                pageSize: endpointsQueryDto.pageSize,
                startTimestamp: endpointsQueryDto.startTimestamp,
                endTimestamp: endpointsQueryDto.endTimestamp
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取traceId表失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取traceId表失败')
        return null
    } catch (e) {
        ElMessage.error(`获取traceId表失败, ${e.message}`)
    }
    return null
}

export const getSpanTopology = async (traceId, serviceName, innerService, startTimestamp, stopTimestamp) => {
    try {
        const {data} = await axios.get('/trace/topology', {
            params: {
                traceId: traceId,
                serviceName: serviceName,
                innerService: innerService,
                startTimestamp: startTimestamp,
                stopTimestamp: stopTimestamp
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取trace下拓扑失败, ${data.message}`)
            return null
        }
        ElMessage.error('获取trace下拓扑失败')
        return null
    } catch (e) {
        ElMessage.error(`获取trace下拓扑失败, ${e.message}`)
    }
    return null
}

export const getSpanNameList = async (serviceName, startTimestamp, stopTimestamp) => {
    try {
        const {data} = await axios.get('/trace/spanNames', {
            params: {
                serviceName: serviceName,
                startTimestamp: startTimestamp,
                stopTimestamp: stopTimestamp
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取trace下spanName列表失败, ${data.message}`)
            return null
        }
    } catch (e) {
        ElMessage.error(`获取trace下spanName列表失败, ${e.message}`)
    }
    return null
}

export const getSpanTimesList = async(serviceName, spanName, startTimestamp, endTimestamp) => {
    try {
        const {data} = await axios.get('/trace/spanTimes', {
            params: {
                serviceName: serviceName,
                spanName: spanName,
                startTimestamp: startTimestamp,
                endTimestamp: endTimestamp
            }
        })
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`获取trace下spanTimes列表失败, ${data.message}`)
            return null
        }
    } catch (e) {
        ElMessage.error(`获取trace下spanTimes列表失败, ${e.message}`)
    }
    return null
}

export const deleteAllSpansFromDB = async () => {
    try {
        const {data} = await axios.delete('/trace/spans')
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`删除所有span失败, ${data.message}`)
            return null
        }
        ElMessage.error('删除所有span失败')
        return null
    } catch (e) {
        ElMessage.error(`删除所有span失败, ${e.message}`)
    }
    return null
}
