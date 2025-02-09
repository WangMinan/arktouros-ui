<script setup>
    import { onBeforeUnmount, onMounted, toRefs, watch } from "vue";
    import { useStorage } from "@vueuse/core";
    
    let spanTimeOutHistogram
    
    const props = defineProps({
        spanNameCascade: Array,
        startAndStopTime: Array
    })
    
    const {spanNameCascade, startAndStopTime} = toRefs(props)
    
    const drawSpanTimoutHistogram = async () => {
        if (spanTimeOutHistogram) {
            spanTimeOutHistogram.dispose();
        }
        console.log(spanNameCascade.value)
        console.log(startAndStopTime.value)
    }
    
    // 之前那个vue开头的变量现在一直是auto了 不能用 用现在这个
    const checkIsDark = useStorage('theme-appearance', 'auto')
    // 使用自定义监听器来重新绘制图表
    watch(checkIsDark, () => {
        drawSpanTimoutHistogram()
    })
    
    defineExpose({
        drawSpanTimoutHistogram
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

</style>
