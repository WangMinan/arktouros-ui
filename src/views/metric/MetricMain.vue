<script setup>
    import { onBeforeUnmount, onMounted, reactive, ref, watch, } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { getMetricList } from "@/api/metric/index.js";
    import { useStorage } from "@vueuse/core";
    import * as echarts from "echarts";
    import { ElLoading, ElMessage } from "element-plus";
    import { timestampToJsTimeStr } from "@/utils/dateUtil.js";
    
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
    
    const metricList = ref([{
        name: '',
        serviceName: '',
        metricType: '',
        metrics: []
    }])
    
    const setServiceName = () => {
        if (serviceName.value) {
            metricQueryDto.value.serviceName = serviceName.value[1]
        }
    }
    
    function formTmpQueryDto() {
        // 数值预处理 深拷贝
        const tmpQueryDto = JSON.parse(JSON.stringify(metricQueryDto.value))
        if (tmpQueryDto.serviceName === 'null') {
            tmpQueryDto.serviceName = ''
        }
        if (tmpQueryDto.metricNameLimit === 0) {
            tmpQueryDto.metricNameLimit = null
        }
        if (startAndStopTime.value.length === 2) {
            tmpQueryDto.startTimeStamp = Date.parse(startAndStopTime.value[0])
            tmpQueryDto.endTimeStamp = Date.parse(startAndStopTime.value[1])
        } else if (import.meta.env.VITE_NODE_ENV === 'production') {
            ElMessage.warning("当前为正式环境, 时间范围置空时默认获取近半个小时内的数值")
            const now = new Date()
            tmpQueryDto.startTimeStamp = now.getTime() - 30 * 60 * 1000
            tmpQueryDto.endTimeStamp = now.getTime()
        } else {
            tmpQueryDto.startTimeStamp = null
            tmpQueryDto.endTimeStamp = null
        }
        return tmpQueryDto;
    }
    
    const toggleMetrics = async () => {
        if (metricCharts) {
            // metricTopologyCharts.dispose(); //销毁
            metricCharts.forEach(
                chart => chart.dispose()
            )
        }
        // 清空 metricList
        metricList.value = []
        isMetricListEmpty.value = true
        const tmpQueryDto = formTmpQueryDto();
        let loading;
        try {
            loading = ElLoading.service({
                lock: true,
                text: '正在搜索，数据量较大，请耐心等待',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            const data = await getMetricList(tmpQueryDto)
            if (data === null) {
                return
            }
            if (data.result && data.result.length !== 0) {
                isMetricListEmpty.value = false
                // data.result的时间戳转换成时间
                data.result.forEach(item => {
                    item.metrics.forEach(metric => {
                        metric.timestamp = timestampToJsTimeStr(metric.timestamp)
                    })
                })
                metricList.value = data.result
                // 等待v-for渲染完成
                while (!document.getElementById(
                    'metric-graph-' + (metricList.value.length - 1))) {
                    await new Promise(resolve => setTimeout(resolve, 100))
                }
                for (let i = 0; i < metricList.value.length; i++) {
                    try {
                        drawMetric(metricList.value[i], i)
                    } catch (e) {
                        ElMessage.error(e)
                    }
                }
            } else {
                isMetricListEmpty.value = true
            }
        } finally {
            loading.close()
        }
    }
    
    const isMetricListEmpty = ref(true)
    
    let metricCharts = []
    // 之前那个vue开头的变量现在一直是auto了 不能用 用现在这个
    const checkIsDark = useStorage('theme-appearance', 'auto')
    // 使用自定义监听器来重新绘制图表
    watch(checkIsDark, () => {
        if (metricCharts) {
            // metricTopologyCharts.dispose(); //销毁
            metricCharts.forEach(
                chart => chart.dispose()
            )
        }
        for (let i = 0; i < metricList.value.length; i++) {
            try {
                drawMetric(metricList.value[i], i)
            } catch (e) {
                ElMessage.error(e)
            }
        }
    })
    
    let resizeObserver;
    
    onMounted(() => {
        if (metricCharts) {
            // metricTopologyCharts.dispose(); //销毁
            metricCharts.forEach(
                chart => chart.dispose()
            )
        }
        window.addEventListener('resize', handleResize);
        resizeObserver = new ResizeObserver(() => handleResize);
        resizeObserver.observe(document.getElementById('metricCardRef'));
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
    });
    
    const handleResize = () => {
        if (!metricCharts) {
            return;
        }
        metricCharts.forEach(chart => {
            chart.resize();
        });
    };
    
    
    function getBasicOption(metric, index) {
        return {
            backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
            title: {
                // 将metric.name中的下换线替换成空格
                text: metric.name.replace(/_/g, ' '),
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                    lineHeight: 16,
                    // 自动换行 获取dom元素宽度
                    width: document.getElementById('metric-graph-' + index)
                        .offsetWidth - 20,
                    overflow: 'break' // 设置自动换行
                },
                subtext: metric.metrics[0].description ? metric.metrics[0].description : '',
                subtextStyle: {
                    fontSize: 10,
                    lineHeight: 12,
                    // 自动换行 获取dom元素宽度
                    width: document.getElementById('metric-graph-' + index)
                        .offsetWidth - 20,
                    overflow: 'break' // 设置自动换行
                }
            },
            tooltip: {
                trigger: 'item', // 触发类型，可选值: 'item'（数据项触发），'axis'（坐标轴触发），'none'（不触发）
                axisPointer: {
                    type: 'cross', // 设置触发提示的指示器类型
                },
                backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
                textStyle: {
                    color: checkIsDark.value === 'dark' ? '#fff' : '#212224',
                }
            }
        };
    }
    
    const getAxisTagName = (item) => {
        if (Number(item) > 1000000000) {
            // 转换成xG的格式
            return 'G'
        } else if (Number(item) > 1000000) {
            // 转换成xM的格式
            return 'M'
        } else if (Number(item) > 1000) {
            // 转换成xK的格式
            return 'K'
        } else {
            return null
        }
    };
    
    const drawMetric = (metric, index) => {
        let option = getBasicOption(metric, index)
        if (metric.metricType === 'GAUGE' || metric.metricType === 'COUNTER') {
            // 分情况 如果metric.metrics只有一个数据则使用仪表盘 否则使用线形图
            if (metric.metrics.length >= 2) {
                option.xAxis = {
                    type: 'category',
                    data: metric.metrics.map(item => item.timestamp)
                }
                option.yAxis = {
                    type: 'value',
                    name: getAxisTagName(metric.metrics[metric.metrics.length - 1]
                        .value) === null ?
                        null : 'Unit:' + getAxisTagName(metric.metrics[0].value),
                    nameLocation: 'start',
                    nameGap: 20
                }
                option.series = [{
                    data: metric.metrics.map(item => {
                        if (Number(item.value) > 1000000000) {
                            // 转换成xG的格式
                            return (Number(item.value) / 1000000000)
                                .toFixed(2)
                        } else if (Number(item.value) > 1000000) {
                            // 转换成xM的格式
                            return (Number(item.value) / 1000000)
                                .toFixed(2)
                        } else if (Number(item.value) > 1000) {
                            // 转换成xK的格式
                            return (Number(item.value) / 1000)
                                .toFixed(2)
                        } else {
                            return item.value
                        }
                    }),
                    type: 'line'
                }]
            } else {
                // 富文本
                option.series = [{
                    type: 'scatter',
                    symbolSize: 1,
                    data: [
                        {
                            value: [0, 0],
                            label: {
                                show: true,
                                formatter: metric.metrics[0].value + '',
                                fontSize: 20,
                                fontWeight: 'bold',
                                // 红色字体 注意暗黑模式
                                color: checkIsDark.value === 'dark' ? '#ff0000' : '#992233'
                            }
                        }],
                }]
                option.xAxis = {
                    show: false,
                    min: -1,
                    max: 1
                }
                option.yAxis = {
                    show: false,
                    min: -1,
                    max: 1
                }
            }
        } else if (metric.metricType === 'HISTOGRAM' || metric.metricType === 'SUMMARY') {
            let buckets = []
            // 遍历buckets
            for (const key in metric.metrics[0].buckets) {
                buckets.push({
                    key: key,
                    value: metric.metrics[0].buckets[key]
                })
            }
            // 按照key的数值大小对buckets进行排序
            buckets.sort((a, b) => a.key - b.key)
            option.xAxis = {
                type: 'category',
                data: buckets.map(item => item.key)
            }
            option.yAxis = {
                type: 'value',
                name: getAxisTagName(buckets[buckets.length - 1].value) === null ?
                    null : 'Unit:' + getAxisTagName(buckets[buckets.length - 1].value),
            }
            option.series = [{
                data: buckets.map(item => {
                    if (Number(item.value) > 1000000000) {
                        // 转换成xG的格式
                        return (Number(item.value) / 1000000000)
                            .toFixed(2)
                    } else if (Number(item.value) > 1000000) {
                        // 转换成xM的格式
                        return (Number(item.value) / 1000000)
                            .toFixed(2)
                    } else if (Number(item.value) > 1000) {
                        // 转换成xK的格式
                        return (Number(item.value) / 1000)
                            .toFixed(2)
                    } else {
                        return item.value
                    }
                }),
                type: 'bar'
            }]
        }
        let metricChart = echarts.init(
            document.getElementById('metric-graph-' + index),
            checkIsDark.value === 'dark' ? 'dark' : 'light')
        metricChart.setOption(option)
        metricCharts.push(metricChart)
    }
</script>

<template>
    <!-- 面包屑 -->
    <el-row>
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item>
                <a href="/main">主页</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <a href="/main/metric">数值概览</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
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
                    <el-button type="primary" @click="toggleMetrics">搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-divider/>
        <!-- 图标板 -->
        <div class="graph-div" v-if="!isMetricListEmpty">
            <div class="graph-card"
                 v-for="(metricVo, index) in metricList"
                 :key="index">
                <div class="graph-item" :id="'metric-graph-' + index"></div>
            </div>
        </div>
    </el-card>
</template>

<style scoped lang="less">
    .metric-card {
        margin-top: 2%;
        
        .graph-div {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 10px;
            
            .graph-card {
                height: 240px;
                border: 1px solid var(--el-menu-border-color);
                
                .graph-item {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
