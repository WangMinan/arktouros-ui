<script setup>
    import { onMounted, reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { deleteAllSpansFromDB, getEndPointAndTraceIdListByServiceName } from "@/api/trace/index.js";
    import { useRouter } from "vue-router";
    import TraceTopologyDiagram from "@/components/screen/TraceTopologyDiagram.vue";
    import { ElLoading, ElMessage } from "element-plus";
    
    const innerService = ref(true)
    const startAndStopTime = ref([])
    
    const serviceName = ref()
    const router = useRouter()
    
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
    
    const endpointsQueryDto = reactive({
        serviceName: '',
        pageNum: 1,
        pageSize: 10,
        startTimestamp: '',
        endTimestamp: ''
    })
    
    const traceTopologyDiagramRef = ref()
    const traceId = ref('')
    
    onMounted(async () => {
        if (router.currentRoute.value.query.serviceName) {
            endpointsQueryDto.serviceName = router.currentRoute.value.query.serviceName
            serviceName.value = ['default', router.currentRoute.value.query.serviceName]
            await getEndPointAndTraceIdList()
        }
        if (router.currentRoute.value.query.traceId) {
            // 如果traceIdList没有这个值 写入
            if (!traceIdList.value.includes(router.currentRoute.value.query.traceId)) {
                traceIdList.value.push(router.currentRoute.value.query.traceId)
            }
            traceId.value = router.currentRoute.value.query.traceId
        }
        if (router.currentRoute.value.query.serviceName && router.currentRoute.value.query.traceId) {
            await traceTopologyDiagramRef.value.getTopology(traceId.value, innerService.value, null, null)
        }
    })
    
    const total = ref(0)
    
    const getEndPointAndTraceIdList = async () => {
        // 先清空原有的内容
        endpointTraceIdArr.value.splice(0, endpointTraceIdArr.value.length)
        endpoints.splice(0, endpoints.length)
        total.value = 0
        traceTopologyDiagramRef.value.disposeSpanTopology()
        traceIdList.value = []
        traceId.value = ''
        // 拿到叶子结点元素
        endpointsQueryDto.serviceName = serviceName.value[1]
        
        // 深拷贝
        const tmpQueryDto = JSON.parse(JSON.stringify(endpointsQueryDto))
        // 文本时间转long型时间戳
        if (startAndStopTime.value != null && startAndStopTime.value.length === 2) {
            tmpQueryDto.startTimestamp = Date.parse(startAndStopTime.value[0])
            tmpQueryDto.endTimestamp = Date.parse(startAndStopTime.value[1])
        } else {
            // 没输入时间 置空字段
            tmpQueryDto.startTimestamp = null
            tmpQueryDto.endTimestamp = null
        }
        
        const data = await getEndPointAndTraceIdListByServiceName(tmpQueryDto)
        if (data === null || data.result.length === 0) {
            return
        }
        total.value = data.result.length
        endpointTraceIdArr.value.splice(0, endpointTraceIdArr.value.length)
        endpoints.splice(0, endpoints.length)
        data.result.forEach(item => {
            endpointTraceIdArr.value.push(item)
        })
        endpointTraceIdArr.value.forEach(endPointTraceId => {
            endpoints.push(endPointTraceId.endPoint)
        })
        traceIdList.value = endpointTraceIdArr.value[0].traceIds
    }
    
    let traceIdList = ref([])
    const endpointTraceIdArr = ref([
        {
            endPoint: {},
            traceIds: []
        }
    ])
    const endpoints = reactive([])
    
    const handleSizeChange = async (newSize) => {
        endpointsQueryDto.pageSize = newSize
        await getEndPointAndTraceIdList()
    }
    
    const handleCurrentChange = async (newPage) => {
        endpointsQueryDto.pageNum = newPage
        await getEndPointAndTraceIdList()
    }
    
    const setTraceIdList = (endPoint) => {
        // 从endpointTraceIdArr找
        endpointTraceIdArr.value.forEach(item => {
            if (item.endPoint === endPoint) {
                traceIdList.value = item.traceIds
            }
        })
    }
    
    const callTraceChart = async () => {
        let tmpStart = null
        let tmpStop = null
        
        if (startAndStopTime.value != null && startAndStopTime.value.length === 2) {
            tmpStart = Date.parse(startAndStopTime.value[0])
            tmpStop = Date.parse(startAndStopTime.value[1])
        }
        
        await traceTopologyDiagramRef.value.getTopology(traceId.value, innerService.value, tmpStart, tmpStop)
    }
    
    const deleteAllSpans = async () => {
        const loading = ElLoading.service({
            lock: true,
            text: '正在执行数据运维操作，请等待。',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
            const data = await deleteAllSpansFromDB()
            if (data === null || data.result.length === 0) {
                return
            }
            ElMessage.success('删除所有链路数据成功')
        } finally {
            loading.close()
            router.go(0)
        }
    }
    
    
</script>

<template>
    <div class="trace-main-container">
        <!-- 面包屑导航 -->
        <el-row class="breadcrumb-header-row">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/main' }">
                    主页
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    链路
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{path: '/main/trace/dashboard'}">
                    调用链路
                </el-breadcrumb-item>
            </el-breadcrumb>
            <el-tooltip placement="bottom">
                <template #content>
                    点击该按钮将会<b style="color: red">删除所有链路数据</b>，请确保您知晓该操作将带来的后果。 <br/>
                    删除操作将锁定用户界面直至删除完成。
                </template>
                <el-button type="danger" @click="deleteAllSpans">
                    删除所有链路数据
                </el-button>
            </el-tooltip>
        </el-row>
        <el-card class="table-card">
            <!-- 级联选择框 -->
            <el-row class="cascader-div">
                <el-form :inline="true">
                    <el-form-item label="服务名称">
                        <el-cascader
                            placeholder="请选择对应服务"
                            v-model="serviceName"
                            clearable
                            :props="traceIdCascaderProps"
                            :show-all-levels="false"
                            @change="getEndPointAndTraceIdList"
                        />
                    </el-form-item>
                    <el-form-item label="起止时间">
                        <el-date-picker
                            v-model="startAndStopTime"
                            type="datetimerange"
                            range-separator="到"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            @clear="getEndPointAndTraceIdList"
                            @change="getEndPointAndTraceIdList"
                        />
                    </el-form-item>
                </el-form>
            </el-row>
            <el-divider/>
            <el-row :gutter="10" style="margin-top: 2%;">
                <el-col :span="8">
                    <div>追踪端点信息</div>
                    <div class="endpoint-div">
                        <div class="table-div">
                            <el-table :data="endpoints"
                                      stripe
                            >
                                <el-table-column prop="serviceName" label="服务名称"/>
                                <el-table-column prop="ip" label="IP地址"/>
                                <el-table-column prop="port" label="端口号"/>
                                <el-table-column prop="latency" label="时延"/>
                                <el-table-column fixed="right" label="绘图">
                                    <template #default="scope">
                                        <el-tooltip effect="light"
                                                    content="查看Endpoint所在链路信息"
                                                    placement="top"
                                                    :enterable="false">
                                            <el-button type="primary" circle size="small"
                                                       @click="setTraceIdList(scope.row)">
                                                <el-icon>
                                                    <ArrowRightBold/>
                                                </el-icon>
                                            </el-button>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="pagination-div">
                            <el-pagination
                                v-model:current-page="endpointsQueryDto.pageNum"
                                v-model:page-size="endpointsQueryDto.pageSize"
                                :page-sizes="[2, 5, 10, 20]"
                                layout="total, pager, sizes"
                                :total="total"
                                :pager-count="5"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                            />
                        </div>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div>
                        <div>Span调用图</div>
                        <el-row :gutter="15">
                            <el-col :span="12">
                                <el-form-item label="TraceId">
                                    <el-select v-model="traceId"
                                               placeholder="请在左侧选择Endpoint后，选择TraceId"
                                               style="width: 90%"
                                               clearable
                                               @change="callTraceChart()"
                                    >
                                        <el-option
                                            v-for="item in traceIdList"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                        />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item>
                                    <el-switch
                                        active-text="仅查看属于当前service的span"
                                        inactive-text="查看当前trace下的所有span"
                                        v-model="innerService"
                                        size="small"
                                        @change="callTraceChart()"
                                    />
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                    <traceTopologyDiagram
                        ref="traceTopologyDiagramRef"
                        :serviceName="serviceName"
                    />
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<style scoped lang="less">
    .trace-main-container {
        width: 100%;
        height: 100%;
        
        .breadcrumb-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .table-card {
            margin-top: 1%;
            
            .endpoint-div {
                width: 100%;
                border-right: 1px solid var(--el-menu-border-color);
                
                .table-div {
                    margin-top: 2%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    
                    .el-table {
                        width: 95%;
                    }
                }
                
                .pagination-div {
                    margin-top: 1%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
</style>
