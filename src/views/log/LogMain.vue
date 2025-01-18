<script setup>
    import { onMounted, reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { deleteAllLogsFromDB, getLogList, getSeverityTextList } from "@/api/log/index.js";
    import { useRouter } from "vue-router";
    import { ElLoading, ElMessage } from "element-plus";
    import { timestampToJsTimeStr } from "@/utils/dateUtil.js";
    import { useAsideStore } from "@/store/aside/index.js";
    
    const asideStore = useAsideStore()
    
    const router = useRouter()
    const total = ref(0)
    const logList = ref([])
    const serviceName = ref()
    const startAndStopTime = ref([])
    const logQueryDto = ref({
        pageNum: 1,
        pageSize: 10,
        serviceName: '',
        traceId: '',
        keyword: '',
        keywordNotIncluded: '',
        severityText: '',
        startTimestamp: 0,
        endTimestamp: 0
    })
    
    const toggleLogList = async () => {
        // 深拷贝
        const tmpLogQueryDto = JSON.parse(JSON.stringify(logQueryDto.value))
        // 文本时间转long型时间戳
        if (startAndStopTime.value.length === 2) {
            tmpLogQueryDto.startTimestamp = Date.parse(startAndStopTime.value[0])
            tmpLogQueryDto.endTimestamp = Date.parse(startAndStopTime.value[1])
        } else {
            // 没输入时间 置空字段
            tmpLogQueryDto.startTimestamp = null
            tmpLogQueryDto.endTimestamp = null
        }
        const data = await getLogList(tmpLogQueryDto)
        if (data === null) {
            return
        }
        total.value = parseInt(data.result.total)
        data.result.data.forEach(item => {
            if (!item.serviceName) {
                item.serviceName = 'null'
            }
        })
        logList.value = data.result.data
    }
    
    const handleSizeChange = async (newSize) => {
        logQueryDto.value.pageSize = newSize
        await toggleLogList()
    }
    
    const handleCurrentChange = async (newPage) => {
        logQueryDto.value.pageNum = newPage
        await toggleLogList()
    }
    
    const querySeverityText = async (queryString, cb) => {
        const data = await getSeverityTextList(queryString)
        if (data === null) {
            cb([])
            return
        }
        // 组织成对象的list {value:"xx"}
        const results = data.result.map(item => {
            if (item) {
                return {
                    value: item
                }
            }
            // 这个位置在上行的时候要重新做处理的
            return {
                value: 'null'
            }
        })
        cb(results)
    }
    
    onMounted(async () => {
        await toggleLogList()
    })
    
    const dialogVisible = ref(false)
    
    const tmpLog = ref({})
    
    const getLogDetail = (log) => {
        // 深拷贝
        const tmpLogCopy = JSON.parse(JSON.stringify(log))
        tmpLog.value = tmpLogCopy
        tmpLog.value.timestamp = timestampToJsTimeStr(tmpLogCopy.timestamp)
        tmpLog.value.error = tmpLogCopy.error ? '异常' : '正常'
        tmpLog.value.tags = tmpLogCopy.tags.map(tag => tag.key + '->' + tag.value).join('\n');
        dialogVisible.value = true
    }
    
    const checkTraceForLog = async (log) => {
        if (!log.serviceName || !log.traceId) {
            ElMessage.warning("该日志未上报链路信息")
            return
        }
        asideStore.$patch((state) => {
            state.currentAside.active = '/main/trace'
        })
        await router.push(`/main/trace?serviceName=${log.serviceName}&traceId=${log.traceId}`)
    }
    
    const traceIdCascaderProps = reactive({
        lazy: true,
        // 指定懒加载方法 node为当前点击的节点，resolve为数据加载完成的回调(必须调用)
        async lazyLoad(node, resolve) {
            // 之后回显的数据
            const nodes = []
            const {level} = node
            if (level === 0) {
                // 请求namespace列表
                const data = await getNamespaceList()
                if (data === null) {
                    return
                }
                // 组织成对象的list {value:"xx"}
                data.result.map(item => {
                    return {
                        leaf: false,
                        value: item,
                        label: item
                    }
                }).forEach(item => {
                    nodes.push(item)
                })
            } else if (level === 1) {
                // 根据选中内容请求service列表
                const data = await getServiceList({
                    query: '',
                    namespace: node.value,
                    pageNum: 1,
                    pageSize: 1000
                })
                if (data === null) {
                    return
                }
                // 组织成对象的list {value:"xx"}
                data.result.data.map(item => {
                    return {
                        leaf: true,
                        value: item.name,
                        label: item.name === '' ? 'null' : item.name
                    }
                }).forEach(item => {
                    nodes.push(item)
                })
            }
            resolve(nodes)
        }
    })
    
    const setServiceName = () => {
        if (serviceName.value) {
            logQueryDto.value.serviceName = serviceName.value[1]
            if (logQueryDto.value.serviceName === '' || logQueryDto.value.serviceName == null) {
                logQueryDto.value.serviceName = 'null'
            }
        } else {
            logQueryDto.value.serviceName = null
        }
    }
    
    const deleteAllLogs = async () => {
        const loading = ElLoading.service({
            lock: true,
            text: '正在执行数据运维操作，请等待。',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
            const data = await deleteAllLogsFromDB()
            if (data === null || data.result.length === 0) {
                return
            }
            ElMessage.success('删除所有链路数据成功')
        } finally {
            loading.close()
            logList.value.splice(0, logList.value.length)
            router.go(0)
        }
    }
</script>

<template>
    <div class="log-main-container">
        <!-- 面包屑导航 -->
        <el-row class="breadcrumb-header-row">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/log">日志概览</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
            <el-tooltip placement="bottom">
                <template #content>
                    点击该按钮将会<b style="color: red">删除所有日志数据</b>，请确保您知晓该操作将带来的后果。 <br/>
                    删除操作将锁定用户界面直至删除完成。
                </template>
                <el-button type="danger" @click="deleteAllLogs">
                    删除所有日志数据
                </el-button>
            </el-tooltip>
        </el-row>
        <el-card class="log-card">
            <!-- 搜索区 -->
            <div class="search-area">
                <el-form :inline="true" :model="logQueryDto">
                    <el-form-item label="服务名称">
                        <el-cascader
                            placeholder="请选择命名空间→服务名称"
                            v-model="serviceName"
                            clearable
                            :props="traceIdCascaderProps"
                            :show-all-levels="false"
                            @change="setServiceName"
                        />
                    </el-form-item>
                    <el-form-item label="traceId">
                        <el-input v-model="logQueryDto.traceId"
                                  placeholder="请输入一个traceId" clearable/>
                    </el-form-item>
                    <el-form-item label="起止时间">
                        <el-date-picker
                            v-model="startAndStopTime"
                            type="datetimerange"
                            range-separator="到"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                        />
                    </el-form-item>
                    <el-form-item label="日志级别">
                        <el-autocomplete
                            class="auto-complete-input"
                            v-model="logQueryDto.severityText"
                            :fetch-suggestions="querySeverityText"
                            clearable
                            placeholder="请输入日志级别"
                        >
                        </el-autocomplete>
                    </el-form-item>
                    <el-form-item label="内容关键词">
                        <el-input v-model="logQueryDto.keyword"
                                  placeholder="请输入一个内容关键词" clearable/>
                    </el-form-item>
                    <el-form-item label="内容不包含的关键词">
                        <el-input v-model="logQueryDto.keywordNotIncluded"
                                  placeholder="请输入内容不包含的关键词" clearable/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="toggleLogList">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-divider/>
            <!-- 日志展示区 超长自动换行-->
            <el-row :gutter="5"
                    v-for="log in logList"
                    :key="log"
                    style="word-break:break-all;">
                <el-col :span="4">{{ log.serviceName }}</el-col>
                <el-col :span="3">{{ timestampToJsTimeStr(log.timestamp) }}</el-col>
                <el-col :span="2">{{ log.severityText }}</el-col>
                <el-col :span="12">{{ log.content }}</el-col>
                <el-col :span="1">
                    <el-tooltip effect="light"
                                content="查看日志对应链路信息" placement="top"
                                :enterable="false">
                        <el-button type="primary" circle size="small"
                                   @click="checkTraceForLog(log)">
                            <el-icon>
                                <Share/>
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                </el-col>
                <el-col :span="1">
                    <el-tooltip effect="light"
                                content="查看日志具体信息" placement="top"
                                :enterable="false">
                        <el-button type="primary" circle size="small"
                                   @click="getLogDetail(log)">
                            <el-icon>
                                <InfoFilled/>
                            </el-icon>
                        </el-button>
                    </el-tooltip>
                </el-col>
            </el-row>
            <!-- pagination -->
            <div class="pagination-div">
                <el-pagination
                    v-model:current-page="logQueryDto.pageNum"
                    v-model:page-size="logQueryDto.pageSize"
                    :page-sizes="[2, 5, 10, 20]"
                    layout="total, prev, pager, next, sizes"
                    :total="total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </div>
        </el-card>
    </div>
    
    <!-- 弹窗 -->
    <el-dialog
        v-model="dialogVisible"
        title="Log"
        width="60%"
    >
        <el-form
            label-position="left"
            label-width="auto"
            :model="tmpLog"
            disabled
        >
            <el-form-item label="日志时间">
                <el-input v-model="tmpLog.timestamp"/>
            </el-form-item>
            <el-form-item label="日志级别">
                <el-input v-model="tmpLog.severityText"/>
            </el-form-item>
            <el-form-item label="日志内容">
                <el-input type="textarea" v-model="tmpLog.content"/>
            </el-form-item>
            <el-form-item label="服务名称">
                <el-input v-model="tmpLog.serviceName"/>
            </el-form-item>
            <el-form-item label="追踪Id">
                <el-input v-model="tmpLog.traceId"/>
            </el-form-item>
            <el-form-item label="SpanId">
                <el-input v-model="tmpLog.spanId"/>
            </el-form-item>
            <el-form-item label="状态">
                <el-input v-model="tmpLog.error"/>
            </el-form-item>
            <el-form-item label="Tags">
                <el-input type="textarea" :rows="3" v-model="tmpLog.tags"/>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style scoped lang="less">
    .breadcrumb-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .log-card {
        margin-top: 1%;
        
        .pagination-div {
            margin-top: 2%;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
