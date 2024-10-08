<script setup>
    import { onBeforeUnmount, onMounted, ref, toRefs, watch } from "vue";
    import { getSpanTopology } from "@/api/trace/index.js";
    import { useStorage } from "@vueuse/core";
    import { timestampToJsTimeStr } from "@/utils/dateUtil.js";
    import * as echarts from "echarts";
    
    const topology = ref({
        name: '',
        value: '',
        collapsed: false,
        children: []
    })
    
    const props = defineProps({
        serviceName: Array
    })
    
    // 防止父子传参失败
    const {serviceName} = toRefs(props)
    
    const getTopology = async (traceIdInput, innerService) => {
        // props传traceId失效 不能挂在input组件上
        if (traceIdInput === '' || traceIdInput === undefined) {
            return
        }
        // 拿到traceId
        const data = await getSpanTopology(traceIdInput, serviceName.value[1], innerService)
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
        drawSpanTopology()
    })
    
    const disposeSpanTopology = () => {
        if (spanTopologyChart) {
            spanTopologyChart.dispose();
        }
    }
    
    defineExpose({
        getTopology,
        disposeSpanTopology
    })
    
    let resizeObserver;
    
    onMounted(() => {
        window.addEventListener('resize', handleResize);
        resizeObserver = new ResizeObserver(() => handleResize);
        resizeObserver.observe(document.getElementById('trace-topology-div'));
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
    });
    
    const handleResize = () => {
        if (!spanTopologyChart) {
            return;
        }
        spanTopologyChart.resize()
    };
    
    function formatSpan(span) {
        const status = span.endTime === '-1' ? '异常或离线' : '正常'
        const startTime = timestampToJsTimeStr(span.startTime)
        const endTime = span.endTime === '-1' ? '该Span异常' : timestampToJsTimeStr(span.endTime)
        const localIp = span.localEndPoint.ip === '' ? 'null' : span.localEndPoint.ip
        const remoteIp = span.remoteEndPoint.ip === '' ? 'null' : span.remoteEndPoint.ip
        return `<div>
                    <div>
                        <b>当前Span详细情况</b>
                    </div>
                    <ul>
                        <li>id: ${span.id}</li>
                        <li>名称: ${span.name}</li>
                        <li>所属服务: ${span.serviceName}</li>
                        <li>开始时间: ${startTime}</li>
                        <li>结束时间: ${endTime}</li>
                        <li>span状态: ${status}</li>
                        <li>父节点SpanId: ${span.parentSpanId}</li>
                        <li>所属endPoint: ${span.localEndPoint.serviceName}</li>
                        <li>所属endPoint ip与端口: ${localIp}:${span.localEndPoint.port}</li>
                        <li>远程endPoint: ${span.remoteEndPoint.serviceName}</li>
                        <li>远程endPoint ip与端口: ${remoteIp}:${span.remoteEndPoint.port}</li>
                    </ul>
                </div>`;
    }
    
    const drawSpanTopology = () => {
        if (spanTopologyChart) {
            spanTopologyChart.dispose(); //销毁
        }
        let option = {
            title: {
                subtext: '绿色为正常Span节点，红色为异常Span节点',
                align: 'right'
            },
            backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
                textStyle: {
                    color: checkIsDark.value === 'dark' ? '#fff' : '#212224',
                },
                // 自定义提示框内容的回调函数 params参数实际存储的就是SpanTreeNodeVo对象
                formatter: function (params) {
                    // 通过修改SpanTreeNodeVo，我们把Span对象也放到params中
                    return formatSpan(params.data.span);
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
                        position: 'right',
                        verticalAlign: 'middle',
                        fontSize: 9
                    },
                    initialTreeDepth: -1,
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
    <div id="trace-topology-div"></div>
</template>

<style scoped lang="less">
    #trace-topology-div {
        margin-top: 2%;
        width: 98%;
        height: 400px;
    }
</style>
