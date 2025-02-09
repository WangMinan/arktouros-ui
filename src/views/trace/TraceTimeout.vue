<script setup>
    import { reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import TraceTopologyDiagram from "@/components/screen/TraceTopologyDiagram.vue";
    
    const startAndStopTime = ref([])
    
    const serviceName = ref()
    
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
                // 选中service后的操作 获取span列表
                nodes.push({
                    leaf: true,
                    value: node.value,
                    label: node.value
                })
            }
            resolve(nodes)
        }
    })
    
    const traceTopologyDiagramRef = ref()
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
                    <el-form-item label="Span名称">
                        <el-cascader
                            placeholder="请选择对应Span名称"
                            v-model="serviceName"
                            clearable
                            :props="traceIdCascaderProps"
                            :show-all-levels="false"
                        />
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
                        <el-button type="primary" @click="">统计</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-divider/>
            <div style="margin-top: 2%;">
                <div>调用超时统计</div>
                <traceTopologyDiagram
                    ref="traceTopologyDiagramRef"
                    :serviceName="serviceName"
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
