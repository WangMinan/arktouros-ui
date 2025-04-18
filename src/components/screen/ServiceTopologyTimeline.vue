<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { timestampToJsTimeStr } from '@/utils/dateUtil';
    import { getServiceTimeRange } from "@/api/service/index.js";
    import { ElMessage } from 'element-plus';
    
    // 原有的响应式变量
    const startTimestamp = ref(Date.now() - 24 * 60 * 60 * 1000);
    const endTimestamp = ref(Date.now());
    const currentTimestamp = ref(Date.now());
    const sliderKey = ref(0);
    const tooltipVisible = ref(false);
    const formattedTime = ref('');
    const dataLoaded = ref(false);
    
    // 新增的响应式变量
    const userStartTime = ref(new Date(startTimestamp.value));
    const userEndTime = ref(new Date(endTimestamp.value));
    const stepValue = ref(60000); // 默认步长为1分钟(毫秒)
    // 修改步长选项，限制在1ms到5分钟之间
    const stepOptions = [
        { label: '1毫秒', value: 1 },
        { label: '100毫秒', value: 100 },
        { label: '1秒', value: 1000 },
        { label: '10秒', value: 10000 },
        { label: '30秒', value: 30000 },
        { label: '1分钟', value: 60000 },
        { label: '5分钟', value: 300000 }
    ];
    
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
                
                // 同步更新用户时间选择器的值
                userStartTime.value = new Date(startTimestamp.value);
                userEndTime.value = new Date(endTimestamp.value);
            }
        } catch (error) {
            console.error('获取时间范围失败:', error);
        } finally {
            // 无论成功失败都标记为已加载，并强制更新组件
            dataLoaded.value = true;
            sliderKey.value += 1;
        }
    }
    
    // 检查开始时间和结束时间的合法性
    const validateTimeRange = () => {
        if (userStartTime.value > userEndTime.value) {
            ElMessage.warning('开始时间不能晚于结束时间，已自动调整');
            userStartTime.value = new Date(userEndTime.value.getTime() - 3600000); // 默认调整为结束时间前1小时
            return false;
        }
        return true;
    }
    
    // 用户更新开始时间
    const handleStartTimeChange = () => {
        if (!validateTimeRange()) {
            return;
        }
        updateTimeRange();
    }
    
    // 用户更新结束时间
    const handleEndTimeChange = () => {
        if (!validateTimeRange()) {
            return;
        }
        updateTimeRange();
    }
    
    // 用户更新时间范围
    const updateTimeRange = () => {
        startTimestamp.value = userStartTime.value.getTime();
        endTimestamp.value = userEndTime.value.getTime();
        
        // 确保当前选择的时间在新范围内
        if (currentTimestamp.value < startTimestamp.value) {
            currentTimestamp.value = startTimestamp.value;
        } else if (currentTimestamp.value > endTimestamp.value) {
            currentTimestamp.value = endTimestamp.value;
        }
        
        // 更新时间戳显示并重新渲染滑块
        formattedTime.value = timestampToJsTimeStr(currentTimestamp.value);
        sliderKey.value += 1;
        
        // 触发拓扑图更新
        emit('update-topology', currentTimestamp.value);
    }
    
    // 更新步长
    const handleStepChange = (value) => {
        stepValue.value = value;
        sliderKey.value += 1; // 强制重新渲染滑块
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
        
        <!-- 时间范围和步长设置 -->
        <div class="timeline-controls">
            <el-date-picker
                v-model="userStartTime"
                type="datetime"
                placeholder="开始时间"
                size="small"
                @change="handleStartTimeChange"
            />
            <el-date-picker
                v-model="userEndTime"
                type="datetime"
                placeholder="结束时间"
                size="small"
                @change="handleEndTimeChange"
            />
            <el-select
                v-model="stepValue"
                placeholder="选择步长"
                size="small"
                @change="handleStepChange"
            >
                <el-option
                    v-for="item in stepOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
        
        <div class="timeline-slider">
            <el-slider
                v-if="dataLoaded"
                :key="sliderKey"
                v-model="currentTimestamp"
                :min="startTimestamp"
                :max="endTimestamp"
                :step="stepValue"
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
            margin-bottom: 10px;
            
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
        
        .timeline-controls {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            gap: 10px;
            
            .el-date-picker {
                flex: 2;
            }
            
            .el-select {
                flex: 1;
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
            margin-top: 5px;
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
