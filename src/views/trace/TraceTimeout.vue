<script setup>
    import { onMounted, reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { getSpanNameList } from "@/api/trace/index.js";
    import TraceTimeoutDiagram from "@/components/screen/TraceTimeoutDiagram.vue";
    import { useRouter } from "vue-router";
    
    const startAndStopTime = ref([])
    const spanNameCascade = ref()
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
                        leaf: false,
                        value: item.name,
                        label: item.name === '' ? 'null' : item.name
                    }
                }).forEach(item => {
                    nodes.push(item)
                })
            } else if (level === 2) {
                let tmpStart = null
                let tmpStop = null
                console.log(startAndStopTime.value)
                if (startAndStopTime.value != null && startAndStopTime.value.length === 2) {
                    tmpStart = Date.parse(startAndStopTime.value[0])
                    tmpStop = Date.parse(startAndStopTime.value[1])
                }
                console.log(tmpStart)
                const data = await getSpanNameList(node.value, tmpStart, tmpStop)
                if (data === null) {
                    return
                }
                // 组织成对象的list {value:"xx"}
                data.result.map(item => {
                    return {
                        leaf: true,
                        value: item,
                        label: item
                    }
                }).forEach(item => {
                    nodes.push(item)
                })
            }
            resolve(nodes)
        }
    })
    
    const traceTimeoutDiagramRef = ref()
    
    onMounted(async () => {
        if (router.currentRoute.value.query.startTime != null
            && router.currentRoute.value.query.stopTime != null
            && router.currentRoute.value.query.namespace != null
            && router.currentRoute.value.query.serviceName != null
            && router.currentRoute.value.query.spanName != null
        ) {
            startAndStopTime.value = [
                // unix时间戳转Date
                new Date(Number(router.currentRoute.value.query.startTime)),
                new Date(Number(router.currentRoute.value.query.stopTime))
            ]
            console.log(startAndStopTime.value)
            spanNameCascade.value = [
                router.currentRoute.value.query.namespace,
                router.currentRoute.value.query.serviceName,
                router.currentRoute.value.query.spanName
            ]
        }
    })
</script>

<template>
    <div class="trace-main-container">
        <!-- 面包屑导航 -->
        <el-row class="breadcrumb-header-row">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/main' }">
                    主页
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    链路
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{path: '/main/trace/dashboard'}">
                    超时统计
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-card class="table-card">
            <!-- 级联选择框 -->
            <el-row class="cascader-div">
                <el-form :inline="true">
                    <el-form-item style="width: 60%" label="起止时间">
                        <el-date-picker
                            v-model="startAndStopTime"
                            type="datetimerange"
                            range-separator="到"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                        />
                    </el-form-item>
                    <el-form-item style="width: 40%" label="Span名称" prop="spanName">
                        <el-cascader
                            style="width: 100%"
                            placeholder="请选择对应Span名称"
                            v-model="spanNameCascade"
                            clearable
                            :props="traceIdCascaderProps"
                            :show-all-levels="false"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"
                                   @click="traceTimeoutDiagramRef.getLineChart()">
                            统计
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-divider/>
            <div style="margin-top: 1%;">
                <div>调用超时统计</div>
                <trace-timeout-diagram
                    ref="traceTimeoutDiagramRef"
                    :spanNameCascade="spanNameCascade"
                    :startAndStopTime="startAndStopTime"
                />
            </div>
        </el-card>
    </div>
</template>

<style scoped lang="less">
    .trace-main-container {
        width: 100%;
        height: 100%;
        
        .breadcrumb-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .table-card {
            margin-top: 1%;
            
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
                    margin-top: 1%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
</style>
