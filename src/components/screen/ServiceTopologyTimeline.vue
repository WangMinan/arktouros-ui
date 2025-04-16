<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { timestampToJsTimeStr } from '@/utils/dateUtil';
    import { getServiceTimeRange } from "@/api/service/index.js";
    
    // 声明响应式变量
    const startTimestamp = ref(Date.now() - 24 * 60 * 60 * 1000);
    const endTimestamp = ref(Date.now());
    const currentTimestamp = ref(Date.now());
    const sliderKey = ref(0);
    const tooltipVisible = ref(false);
    const formattedTime = ref('');
    const dataLoaded = ref(false);
    
    const emit = defineEmits(['update-topology']);
    
    // 获取时间范围数据
    const getStartAndStopTime = async () => {
        try {
            const data = await getServiceTimeRange();
            if (data && data.result) {
                startTimestamp.value = Number(data.result.startTimestamp);
                endTimestamp.value = Number(data.result.endTimestamp);
                // 确保当前时间在范围内且为数值类型
                currentTimestamp.value = Number(data.result.endTimestamp);
                formattedTime.value = timestampToJsTimeStr(currentTimestamp.value);
            }
        } catch (error) {
            console.error('获取时间范围失败:', error);
        } finally {
            // 无论成功失败都标记为已加载，并强制更新组件
            dataLoaded.value = true;
            sliderKey.value += 1;
        }
    }
    
    onMounted(async () => {
        await getStartAndStopTime();
    });
    
    // 监听时间变化
    watch(currentTimestamp, (newVal) => {
        formattedTime.value = timestampToJsTimeStr(newVal);
    });
    
    const handleSliderChange = (value) => {
        currentTimestamp.value = Number(value);
    };
    
    const showTooltip = () => {
        tooltipVisible.value = true;
    };
    
    const hideTooltip = () => {
        tooltipVisible.value = false;
    };
    
    const handleDragEnd = () => {
        emit('update-topology', currentTimestamp.value);
    };
</script>

<template>
    <div class="timeline-container">
        <div class="timeline-header">
            <div class="timeline-title">服务拓扑时间轴</div>
            <div class="timeline-current-time">当前选择时间: {{ formattedTime }}</div>
        </div>
        <div class="timeline-slider">
            <el-slider
                v-if="dataLoaded"
                :key="sliderKey"
                v-model="currentTimestamp"
                :min="startTimestamp"
                :max="endTimestamp"
                :format-tooltip="timestampToJsTimeStr"
                @change="handleSliderChange"
                @mouseenter="showTooltip"
                @mouseleave="hideTooltip"
                @mouseup="handleDragEnd"
            />
            <div v-else class="loading-text">加载中...</div>
        </div>
        <div class="timeline-footer">
            <div class="timeline-start-time">{{ timestampToJsTimeStr(startTimestamp) }}</div>
            <div class="timeline-end-time">{{ timestampToJsTimeStr(endTimestamp) }}</div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .timeline-container {
        margin-top: 5px;
        padding: 6px 10px;
        border-radius: 4px;
        background-color: var(--el-bg-color);
        box-shadow: var(--el-box-shadow-lighter);
        
        .timeline-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2px;
            
            .timeline-title {
                font-weight: bold;
                color: var(--el-text-color-primary);
                font-size: 14px;
            }
            
            .timeline-current-time {
                color: var(--el-color-primary);
                font-size: 13px;
            }
        }
        
        .timeline-slider {
            padding: 2px 5px;
            margin: 0;
            
            :deep(.el-slider) {
                margin: 0;
                --el-slider-height: 6px;
                
                .el-slider__button {
                    width: 12px;
                    height: 12px;
                }
            }
        }
        
        .timeline-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 2px;
            font-size: 11px;
            color: var(--el-text-color-secondary);
        }
        
        .loading-text {
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 13px;
            color: var(--el-text-color-secondary);
        }
    }
</style>
