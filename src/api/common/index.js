import axios from '../index.js'
import { ElMessage } from "element-plus";

export const deleteAllDataFromDB = async () => {
    try {
        const {data} = await axios.delete('/all')
        if (data.code !== null && data.code === 2000) {
            return data
        } else if (data.code !== null){
            ElMessage.error(`删除所有数据失败, ${data.message}`)
            return null
        }
    } catch (e) {
        ElMessage.error(`删除所有数据失败, ${e.message}`)
    }
    return null
}
