<script setup>
    
    import ServiceTopologyDiagram from "@/components/screen/ServiceTopologyDiagram.vue";
    import { onMounted, reactive, ref } from "vue";
    import { getLogList } from "@/api/log/index.js";
    import { timestampToJsTimeStr } from "@/utils/dateUtil.js";
    import TraceTopologyDiagram from "@/components/screen/TraceTopologyDiagram.vue";
    import { getEndPointAndTraceIdListByServiceName } from "@/api/trace/index.js";
    import MetricDiagram from "@/components/screen/MetricDiagram.vue";
    import { useHeaderStore } from "@/store/header/index.js";
    import { storeToRefs } from "pinia";
    
    const serviceName = ref('')
    
    const baseQueryDto = reactive({
        query: '',
        namespace: 'default',
        pageNum: 1,
        pageSize: 100
    })
    
    const headerStore = useHeaderStore()
    const {currentHeader} = storeToRefs(headerStore)
    
    const logQueryDto = ref({
        pageNum: 1,
        pageSize: 3,
        serviceName: '',
        traceId: '',
        keyword: '',
        keywordNotIncluded: '',
        severityText: '',
        // 倒推半小时
        startTimestamp: 0,
        // 当前unix时间戳
        endTimestamp: Date.now()
    })
    
    const endpointsQueryDto = reactive({
        serviceName: '',
        pageNum: 1,
        pageSize: 10
    })
    
    const setServiceName = async () => {
        // const data = await getServiceList(baseQueryDto)
        // if (data === null) {
        //     serviceName.value = ''
        // }
        // const serviceNameList = []
        // data.result.data.map(item => {
        //     serviceNameList.push(item.name)
        // })
        // serviceName.value = serviceNameList[Math.floor(Math.random() * serviceNameList.length)]
        serviceName.value = 'service_f'
        logQueryDto.value.serviceName = serviceName.value
        endpointsQueryDto.serviceName = serviceName.value
        metricQueryDto.value.serviceName = serviceName.value
        headerStore.$patch((state) => {
            state.currentHeader.service = serviceName.value
        })
    }
    
    const logList = ref([])
    const traceIdList = ref([])
    
    const getLogs = async () => {
        const data = await getLogList(logQueryDto.value)
        logList.value = data.result.data
    }
    
    const getSpanTree = async () => {
        const data = await getEndPointAndTraceIdListByServiceName(endpointsQueryDto)
        if (data === null || data.result.length === 0) {
            return
        }
        data.result.forEach(item => {
            item.traceIds.forEach(traceId => {
                traceIdList.value.push(traceId)
            })
        })
        traceTopologyDiagramRef.value.getTopology(traceIdList.value[Math.floor(Math.random() * traceIdList.value.length)])
    }
    
    const getMetric = async () => {
        await metricDiagramRef.value.toggleMetrics()
    }
    
    const refreshUI = async () => {
        await setServiceName()
        await getLogs()
        await getSpanTree()
        await getMetric()
    }
    
    const traceTopologyDiagramRef = ref()
    const metricDiagramRef = ref()
    
    const metricQueryDto = ref({
        serviceName: '',
        metricNameLimit: 2,
        startTimeStamp: 0,
        endTimeStamp: 0,
    })
    
    onMounted(() => {
        refreshUI()
        const serviceTopologyDom = document.getElementById('service-topology-dom')
        serviceTopologyDom.style.width = '400px'
        serviceTopologyDom.style.height = '250px'
        const traceTopologyDivDom = document.getElementById('trace-topology-div')
        traceTopologyDivDom.style.width = '300px'
        traceTopologyDivDom.style.height = '180px'
    })
</script>

<template>
    <div class="data-card-container">
        <el-row :gutter=15 class="diagram-row-1">
            <el-col :span="14">
                <el-card class="diagram-el-card">
                    <service-topology-diagram
                        class="service-topology-diagram"
                        namespace="default"
                        :symbolSize="25"
                        :repulsion="50"
                        :edgeLength="50"
                    />
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card class="diagram-el-card">
                    <el-row :v-if="logList.length > 0" v-for="log in logList"
                            :key="log"
                            style="word-break:break-all;">
                        <el-col :span="4">{{ log.serviceName }}</el-col>
                        <el-col :span="4">{{ timestampToJsTimeStr(log.timestamp) }}</el-col>
                        <el-col :span="3">{{ log.severityText }}</el-col>
                        <el-col :span="8">{{ log.content }}</el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter=15 class="diagram-row-2">
            <el-col :span="8">
                <el-card class="diagram-el-card">
                    <TraceTopologyDiagram
                        ref="traceTopologyDiagramRef"
                        :serviceName="['default', serviceName]"
                        :innerService="false"
                    />
                </el-card>
            </el-col>
            <el-col :span="16">
                <el-card class="diagram-el-card" id="metricCardRef">
                    <MetricDiagram
                        ref="metricDiagramRef"
                        :metricQueryDto="metricQueryDto"
                        :startAndStopTime="['1990-09-25T00:00:00Z', '2024-09-25T00:00:00Z']"
                    />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="less">
    .data-card-container {
        width: 100%;
        height: 95%;
        
        .diagram-row-1 {
            height: 60%;
            
            .diagram-el-card {
                height: 100%;
            }
        }
        
        .diagram-row-2 {
            height: 38%;
            margin-top: 1.5%;
        }
    }
</style>
