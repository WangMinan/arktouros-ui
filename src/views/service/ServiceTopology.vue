<script setup>
    import { onMounted, ref, watch } from "vue";
    import { getNamespaceList, getServiceTopology } from "@/api/service/index.js";
    import * as echarts from 'echarts';
    import { useStorage } from '@vueuse/core'
    
    const namespace = ref('')
    
    const querySearch = async (queryString, cb) => {
        const data = await getNamespaceList(queryString)
        if (data === null) {
            return
        }
        // 组织成对象的list {value:"xx"}
        const results = data.result.map(item => {
            return {
                value: item
            }
        })
        cb(results)
    }
    
    const nodes = ref([])
    const calls = ref([])
    
    const getTopology = async () => {
        const data = await getServiceTopology(namespace.value);
        const tmpNodes = data.result.nodes
        // 整形成echarts需要的格式 {name: name, category: nodeName}
        nodes.value = tmpNodes.map(item => {
            if (item.nodeObject !== null) {
                return {
                    draggable: true,
                    name: item.nodeObject.name,
                    category: item.nodeObject.nodeName,
                    symbolSize: [50, 50] // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                }
            }
            return null
        })
        const tmpCalls = data.result.calls
        calls.value = tmpCalls.map(call => {
            if (call.source === null || call.target === null) {
                return null
            }
            return {
                source: call.source.nodeObject.name,
                target: call.target.nodeObject.name
            }
        })
    }
    
    onMounted(async () => {
        await getTopology()
        drawServiceTopology()
    })
    
    let serviceTopologyChart
    // 之前那个vue开头的变量现在一直是auto了 不能用 用现在这个
    const checkIsDark = useStorage('theme-appearance', 'auto')
    const drawServiceTopology = () => {
        let option = {
            backgroundColor: checkIsDark.value ==='dark' ? '#212224':'#fff',
            title: {
                text: "服务关系图", // 标题文本
                left : '3%', // 标题距离左侧边距
                top : '3%'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
                textStyle: {
                    color: checkIsDark.value === 'dark' ? '#fff' : '#212224',
                }
            },
            label: {                // 关系对象上的标签
                normal: {
                    show: true,                 // 是否显示标签
                    position: "inside",         // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
                }
            },
            series: [
                {
                    type: 'graph',
                    focusNodeAdjacency: true,   // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
                    roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    layout: 'force', // 力引导布局 否则要手动指定xy坐标
                    symbol: 'circle', // 标记的图形
                    data: nodes.value,
                    links: calls.value,
                    label: { // 关系对象上的标签
                        normal: {
                            show: true, // 是否显示标签
                            position: "inside", // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
                        }
                    },
                    animationEasingUpdate: "quinticInOut", // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
                    animationDurationUpdate: 100, // 数据更新动画的时长。[ default: 300 ]
                }
            ]
        }
        serviceTopologyChart = echarts.init(document.getElementById('service-topology-dom'),
            checkIsDark.value === 'dark' ? 'dark' : 'light'
        );
        serviceTopologyChart.setOption(option)
    }
    
    // 使用自定义监听器来重新绘制图表
    watch(checkIsDark, () => {
        if (serviceTopologyChart) {
            serviceTopologyChart.dispose(); //销毁
        }
        drawServiceTopology()
    })
</script>

<template>
    <div class="topology-container">
        <el-row>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/topology">服务拓扑</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <div class="search-bar">
            <el-autocomplete
                class="auto-complete-input"
                v-model="namespace"
                :fetch-suggestions="querySearch"
                clearable
                placeholder="请选择命名空间--默认为default"
                @select="getTopology"
                style="width: 40%"
            >
                <template #prepend>
                    <el-icon>
                        <Filter/>
                    </el-icon>
                </template>
            </el-autocomplete>
        </div>
        <div class="card-container">
            <el-card>
                <div id="service-topology-dom"></div>
            </el-card>
        </div>
    </div>
</template>

<style scoped lang="less">
    .topology-container {
        width: 100%;
        height: 100%;
        
        .search-bar {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .card-container {
            margin-top: 2%;
            width: 100%;
            display: flex;
            justify-content: center;
            height: 85%;
            
            .el-card {
                display: flex;
                justify-content: center;
                width: 90%;
                #service-topology-dom {
                    width: 800px;
                    height: 500px;
                }
            }
        }
    }
</style>
