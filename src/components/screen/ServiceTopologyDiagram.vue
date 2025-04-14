<script setup>
    import { onBeforeUnmount, onMounted, ref, watch } from "vue";
    import { getServiceTopology } from "@/api/service/index.js";
    import * as echarts from 'echarts';
    import { useStorage } from '@vueuse/core'
    
    // 使用props从父组件向子组件传参
    const props = defineProps({
        namespace: String,
        symbolSize: Number,
        repulsion: Number,
        edgeLength: Number
    });
    
    const nodes = ref([])
    const calls = ref([])
    
    const getTopology = async () => {
        const data = await getServiceTopology(props.namespace);
        const tmpNodes = data.result.nodes
        // 整形成echarts需要的格式 {name: name, category: nodeName}
        nodes.value = tmpNodes.map(item => {
            if (item.nodeObject !== null) {
                return {
                    draggable: true,
                    name: item.nodeObject.name,
                    category: item.nodeObject.status ? 0 : 1,
                    symbolSize: [props.symbolSize, props.symbolSize], // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                    item: item, // 传递给toolTip的附加信息
                    itemStyle: {
                        color: item.nodeObject.status ? "#6EF780": "#FF2700",
                    }
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
    
    defineExpose({
        getTopology
    })
    
    let resizeObserver;
    
    onMounted(async () => {
        await getTopology()
        drawServiceTopology()
        window.addEventListener('resize', handleResize);
        resizeObserver = new ResizeObserver(() => handleResize);
        resizeObserver.observe(document.getElementById('service-topology-dom'));
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
    });
    
    let serviceTopologyChart
    // 之前那个vue开头的变量现在一直是auto了 不能用 用现在这个
    const checkIsDark = useStorage('theme-appearance', 'auto')
    
    function formatService(service) {
        const status = service.status ? '正常' : '超时异常或离线'
        const tagsStr = service.tags.length === 0 ? '[]' : JSON.stringify(service.tags)
        
        
        return `<div>
                    <div>
                        <b>当前Service详细情况</b>
                    </div>
                    <ul>
                        <li>id: ${service.id}</li>
                        <li>名称: ${service.name}</li>
                        <li>命名空间: ${service.namespace}</li>
                        <li>延迟: ${service.latency} ms</li>
                        <li>状态: ${status}</li>
                        <li>标签: ${tagsStr}</li>
                    </ul>
                </div>`;
    }
    
    const drawServiceTopology = () => {
        if (serviceTopologyChart) {
            serviceTopologyChart.dispose(); //销毁
        }
        let option = {
            backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
            title: {
                text: "服务关系图", // 标题文本
            },
            legend: {
            
            }, // 图例
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
                textStyle: {
                    color: checkIsDark.value === 'dark' ? '#fff' : '#212224',
                },
                formatter: function (params) {
                    // 通过修改SpanTreeNodeVo，我们把Span对象也放到params中
                    return formatService(params.data.item.nodeObject);
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
                    edgeSymbol: ['none', 'arrow'],
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
                    force: {
                        repulsion: props.repulsion, // 节点之间的斥力因子。[ default: 50 ]
                        edgeLength: props.edgeLength, // 边的两个节点之间的距离。这个距离也会受 repulsion 影响。[ default: 30 ]
                        layoutAnimation: true, // 在每次迭代结束后开始一次布局更新的动画。[ default: false ]
                    },
                    animationEasingUpdate: "quinticInOut", // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
                    animationDurationUpdate: 100, // 数据更新动画的时长。[ default: 300 ]
                    categories: [
                        {
                            name: '服务在线',
                            itemStyle: {
                                color: "#6EF780"
                            }
                        },
                        {
                            name: '超时异常或离线',
                            itemStyle: {
                                color: "#FF2700"
                            }
                        }
                    ]
                }
            ]
        }
        serviceTopologyChart = echarts.init(document.getElementById('service-topology-dom'),
            checkIsDark.value === 'dark' ? 'dark' : 'light'
        );
        serviceTopologyChart.setOption(option)
    }
    
    const handleResize = () => {
        if (!serviceTopologyChart) {
            return;
        }
        serviceTopologyChart.resize()
    };
    
    // 使用自定义监听器来重新绘制图表
    watch(checkIsDark, () => {
        drawServiceTopology()
    })
</script>

<template>
    <div id="service-topology-dom"></div>
</template>

<style scoped lang="less">
</style>
