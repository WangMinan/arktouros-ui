<script setup>
    import { onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { getEndPointAndTraceIdListByServiceName, getSpanTopology } from "@/api/trace/index.js";
    import { useStorage } from "@vueuse/core";
    import * as echarts from "echarts";
    import { useRouter } from "vue-router";
    
    
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
        pageSize: 10
    })
    
    let resizeObserver;
    
    const handleResize = () => {
        if (!spanTopologyChart) {
            return;
        }
        spanTopologyChart.resize()
    };
    
    onMounted(async () => {
        if (router.currentRoute.value.query.serviceName) {
            endpointsQueryDto.serviceName = router.currentRoute.value.query.serviceName
            serviceName.value = router.currentRoute.value.query.serviceName
            await getEndPointAndTraceIdList()
        }
        if (router.currentRoute.value.query.traceId) {
            // 如果traceIdList没有这个值 写入
            if (!traceIdList.value.includes(router.currentRoute.value.query.traceId)) {
                traceIdList.value.push(router.currentRoute.value.query.traceId)
            }
            traceId.value = router.currentRoute.value.query.traceId
        }
        if(router.currentRoute.value.query.serviceName && router.currentRoute.value.query.traceId) {
            drawSpanTopology()
        }
        window.addEventListener('resize', handleResize);
        resizeObserver = new ResizeObserver(() => handleResize);
        resizeObserver.observe(document.getElementById('trace-topology-div'));
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
    });
    
    const total = ref(0)
    
    const getEndPointAndTraceIdList = async () => {
        // 先清空原有的内容
        endpointTraceIdArr.value.splice(0, endpointTraceIdArr.value.length)
        endpoints.splice(0, endpoints.length)
        total.value = 0
        if (spanTopologyChart) {
            spanTopologyChart.dispose();
        }
        traceIdList.value = []
        traceId.value = ''
        // 拿到叶子结点元素
        endpointsQueryDto.serviceName = serviceName.value[1]
        const data = await getEndPointAndTraceIdListByServiceName(endpointsQueryDto)
        if (data === null) {
            return
        }
        total.value = data.result.length
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
    
    const traceId = ref()
    
    const topology = ref({
        name: '',
        value: '',
        collapsed: false,
        children: []
    })
    
    const getTopology = async () => {
        if (traceId.value === '' || traceId.value === undefined) {
            return
        }
        // 拿到traceId
        const data = await getSpanTopology(traceId.value)
        if (data === null) {
            return
        }
        topology.value = data.result
        drawSpanTopology()
    }
    
    let spanTopologyChart
    // 之前那个vue开头的变量现在一直是auto了 不能用 用现在这个
    const checkIsDark = useStorage('theme-appearance', 'auto')
    // 使用自定义监听器来重新绘制图表
    watch(checkIsDark, () => {
        if (spanTopologyChart) {
            spanTopologyChart.dispose(); //销毁
        }
        drawSpanTopology()
    })
    
    const drawSpanTopology = () => {
        let option = {
            backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
                textStyle: {
                    color: checkIsDark.value === 'dark' ? '#fff' : '#212224',
                }
            },
            series: [
                {
                    type: 'tree',
                    symbol: 'circle', // 标记的图形
                    roam: true,//移动+放大
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750,
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    data: [topology.value]
                }
            ]
        }
        spanTopologyChart =
            echarts.init(
                document.getElementById('trace-topology-div'),
                checkIsDark.value === 'dark' ? 'dark' : 'light')
        spanTopologyChart.setOption(option)
    }
</script>

<template>
    <div class="trace-main-container">
        <!-- 面包屑导航 -->
        <el-row>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/trace">链路信息</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-card class="table-card">
            <!-- 级联选择框 -->
            <div class="cascader-div">
                <el-cascader
                    placeholder="请选择对应服务"
                    v-model="serviceName"
                    style="width: 40%"
                    clearable
                    :props="traceIdCascaderProps"
                    :show-all-levels="false"
                    @change="getEndPointAndTraceIdList"
                />
            </div>
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
                        <el-select v-model="traceId"
                                   placeholder="请在左侧选择Endpoint后，选择TraceId"
                                   style="width: 40%"
                                   clearable
                                   @change="getTopology"
                        >
                            <el-option
                                v-for="item in traceIdList"
                                :key="item"
                                :label="item"
                                :value="item"
                            />
                        </el-select>
                    </div>
                    <div id="trace-topology-div"></div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<style scoped lang="less">
    .trace-main-container {
        width: 100%;
        height: 100%;
        
        .table-card {
            margin-top: 2%;
            
            .cascader-div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
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
                    margin-top: 2%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
            
            #trace-topology-div {
                margin-top: 2%;
                width: 100%;
                height: 400px;
            }
        }
    }
</style>
