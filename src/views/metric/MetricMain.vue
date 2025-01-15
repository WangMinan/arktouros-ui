<script setup>
    import { reactive, ref, } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import MetricDiagram from "@/components/screen/MetricDiagram.vue";
    import { ElLoading, ElMessage } from "element-plus";
    import { deleteAllMetricsFromDB } from "@/api/metric/index.js";
    import { useRouter } from "vue-router";
    
    const router = useRouter()
    
    const metricQueryDto = ref({
        serviceName: '',
        metricNameLimit: 0,
        startTimeStamp: 0,
        endTimeStamp: 0,
    })
    
    const startAndStopTime = ref([])
    
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
    
    const serviceName = ref()
    
    const setServiceName = () => {
        if (serviceName.value) {
            metricQueryDto.value.serviceName = serviceName.value[1]
        }
    }
    
    const metricDiagramRef = ref()
    
    const deleteAllMetrics = async () => {
        const loading = ElLoading.service({
            lock: true,
            text: '正在执行数据运维操作，请等待。',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
            const data = await deleteAllMetricsFromDB()
            if (data === null || data.result.length === 0) {
                return
            }
            ElMessage.success('删除所有数值数据成功')
        } finally {
            loading.close()
            router.go(0)
        }
    }
</script>

<template>
    <!-- 面包屑 -->
    <el-row class="breadcrumb-header-row">
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item>
                <a href="/main">主页</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <a href="/main/metric">数值概览</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <el-tooltip placement="bottom">
            <template #content>
                点击该按钮将会<b style="color: red">删除所有数值数据</b>，请确保您知晓该操作将带来的后果。 <br/>
                删除操作将锁定用户界面直至删除完成。 <br/>
                如果您处于<b style="color: red">离线数据批量导入模式</b>，该操作将同时删除您存储在输入日志文件夹下的所有日志文件。
            </template>
            <el-button type="danger" @click="deleteAllMetrics">
                删除所有数值数据
            </el-button>
        </el-tooltip>
    </el-row>
    <el-card class="metric-card" id="metricCardRef">
        <!-- 搜索条 -->
        <!-- 搜索区 -->
        <div class="search-area">
            <el-form :inline="true" :model="metricQueryDto" class="demo-form-inline">
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
                <el-form-item label="图表数量">
                    <el-tooltip effect="light"
                                content="置0时表示搜索服务下所有数值记录"
                                placement="top"
                                :enterable="false">
                        <el-input-number
                            :min="0"
                            v-model="metricQueryDto.metricNameLimit"
                        />
                    </el-tooltip>
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
                
                <el-form-item>
                    <el-button type="primary" @click="metricDiagramRef.toggleMetrics()">搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-divider/>
        <!-- 图标板 -->
        <MetricDiagram
            ref="metricDiagramRef"
            :metricQueryDto="metricQueryDto"
            :startAndStopTime="startAndStopTime"
        />
    </el-card>
</template>

<style scoped lang="less">
    .breadcrumb-header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .metric-card {
        margin-top: 1%;
    }
</style>
