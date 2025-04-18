<script setup>
    import { onBeforeUnmount, onMounted, toRefs, watch } from "vue";
    import { useStorage } from "@vueuse/core";
    import { getSpanTimesList } from "@/api/trace/index.js";
    import * as echarts from "echarts";
    import { timestampToJsTimeStr } from "@/utils/dateUtil.js";
    import { useAsideStore } from "@/store/aside/index.js";
    import { useRouter } from "vue-router";
    import { ElLoading } from "element-plus";
    
    let spanTimeOutHistogram
    
    const props = defineProps({
        spanNameCascade: Array,
        startAndStopTime: Array
    })
    
    const asideStore = useAsideStore()
    const router = useRouter()
    
    const {spanNameCascade, startAndStopTime} = toRefs(props)
    
    const getLineChart = async () => {
        let loading = ElLoading.service({
            lock: true,
            text: '正在计算用时数据，请等待。',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        try {
            let startTimestamp
            let stopTimestamp
            
            if (startAndStopTime.value.length === 2) {
                startTimestamp = Date.parse(startAndStopTime.value[0])
                stopTimestamp = Date.parse(startAndStopTime.value[1])
            } else {
                startTimestamp = null
                stopTimestamp = null
            }
            
            const {result} = await getSpanTimesList(
                spanNameCascade.value[1],
                spanNameCascade.value[2],
                startTimestamp,
                stopTimestamp
            )
            
            drawLineChart(result)
        } finally {
            loading.close()
        }
    }
    
    function formatSpan(params) {
        const span = params[0].data.span
        let status = '正常'
        span.tags.forEach(tag => {
            if (tag.key === 'long_duration' && tag.value === 'true') {
                status = tag.key
            }
        })
        const startTime = timestampToJsTimeStr(span.startTime)
        const endTime = span.endTime === '-1' ? '该Span超时' : timestampToJsTimeStr(span.endTime)
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
    
    const checkTraceForSpan = async (span) => {
        asideStore.$patch((state) => {
            state.currentAside.active = '/main/trace/dashboard'
        })
        await router.push(`/main/trace/dashboard?serviceName=${span.serviceName}&traceId=${span.traceId}`)
    }
    
    const drawLineChart = (result) => {
        result.spanTimesValues.forEach((item) => {
            // 根据span的状态来设置颜色
            if (!item.itemStyle) item.itemStyle = {};
            if (item.span.tags.some(tag => tag.key === 'long_duration' && tag.value === 'true')) {
                item.itemStyle.color = '#FF2700'
            }
        })
        if (spanTimeOutHistogram) {
            spanTimeOutHistogram.dispose();
        }
        let option = {
            backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
            tooltip: {
                trigger: 'axis',
                triggerOn: 'mousemove',
                backgroundColor: checkIsDark.value === 'dark' ? '#212224' : '#fff',
                textStyle: {
                    color: checkIsDark.value === 'dark' ? '#fff' : '#212224',
                },
                // 将tooltip限制在容器内部
                confine: true,
                // 自定义提示框内容的回调函数 params参数实际存储的就是SpanTreeNodeVo对象
                formatter: function (params) {
                    // 通过修改SpanTreeNodeVo，我们把Span对象也放到params中
                    return formatSpan(params);
                }
            },
            xAxis: {
                name: '时间',
                type: 'category',
                boundaryGap: false,
                data: result.xaxis
            },
            yAxis: {
                name: '耗时(ms)',
                type: 'value'
            },
            series: {
                name: '耗时',
                type: 'line',
                smooth: true,
                data: result.spanTimesValues
            }
        }
        spanTimeOutHistogram = echarts.init(
            document.getElementById('trace-timeout-histogram-div'));
        spanTimeOutHistogram.setOption(option)
        // 监听点击事件 准备跳转
        spanTimeOutHistogram.on('click', async function (params) {
            await checkTraceForSpan(params.data.span)
        })
    }
    
    // 之前那个vue开头的变量现在一直是auto了 不能用 用现在这个
    const checkIsDark = useStorage('theme-appearance', 'auto')
    // 使用自定义监听器来重新绘制图表
    watch(checkIsDark, () => {
        getLineChart()
    })
    
    defineExpose({
        getLineChart
    })
    
    let resizeObserver;
    
    onMounted(() => {
        window.addEventListener('resize', handleResize);
        resizeObserver = new ResizeObserver(() => handleResize);
        resizeObserver.observe(document.getElementById('trace-timeout-histogram-div'));
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
    });
    
    const handleResize = () => {
        if (!spanTimeOutHistogram) {
            return;
        }
        spanTimeOutHistogram.resize()
    };
</script>

<template>
    <div id="trace-timeout-histogram-div"></div>
</template>

<style scoped lang="less">
    #trace-timeout-histogram-div {
        margin-top: 1%;
        width: 98%;
        height: 365px;
    }
</style>
