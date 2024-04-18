<script setup>
    import { reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { getEndPointAndTraceIdListByServiceName } from "@/api/trace/index.js";
    
    const traceId = ref()
    const traceIdCascaderProps = reactive({
        lazy: true,
        // 指定懒加载方法 node为当前点击的节点，resolve为数据加载完成的回调(必须调用)
        async lazyLoad(node, resolve) {
            // 之后回显的数据
            const nodes = []
            const { level } = node
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
    const endpointsQueryDto = reactive({
        serviceName: '',
        pageNum: 1,
        pageSize: 10
    })
    
    const total = ref(0)
    
    const getEndPointAndTraceIdList = async () => {
        // 拿到叶子结点元素
        endpointsQueryDto.serviceName = traceId.value[1]
        const data = await getEndPointAndTraceIdListByServiceName(endpointsQueryDto)
        if (data === null) {
            return
        }
        total.value = data.result.length
        data.result.forEach(item => {
            endpointTraceIdArr.push(item)
        })
        endpointTraceIdArr.forEach(endPointTraceId => {
            endpoints.push(endPointTraceId.endPoint)
        })
    }
    
    const endpointTraceIdArr = reactive([
        {
            endPoint: {},
            traceIds:[]
        }
    ])
    const endpoints = reactive([])
</script>

<template>
    <div class="trace-main-container">
        <!-- 面包屑导航 -->
        <el-row>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/trace">链路信息</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-card class="table-card">
            <!-- 级联选择框 -->
            <div class="cascader-div">
                <el-cascader
                    placeholder="请选择对应服务"
                    v-model="traceId"
                    style="width: 40%"
                    clearable
                    :props="traceIdCascaderProps"
                    :show-all-levels="false"
                    @change="getEndPointAndTraceIdList"
                />
            </div>
            <el-divider/>
            <el-row style="margin-top: 2%;">
                <el-col :span="10">
                    <div>Trace Endpoints</div>
                    <div class="endpoint-div">
                        <div class="table-div">
                            <el-table :data="endpoints"
                                      stripe
                            >
                                <el-table-column prop="ip" label="IP地址"/>
                                <el-table-column prop="port" label="端口号"/>
                                <el-table-column prop="latency" label="时延"/>
                                <el-table-column prop="serviceName" label="服务名称"/>
                                <el-table-column fixed="right" label="操作">
                                    <template #default="scope">
                                        <el-tooltip effect="light"
                                                    content="查看链路追踪信息" placement="top"
                                                    :enterable="false">
                                            <el-button type="primary" circle size="small"
                                                       @click="getServiceDetail(scope.row.id)">
                                                <el-icon>
                                                    <InfoFilled/>
                                                </el-icon>
                                            </el-button>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="pagination-div">
                            <el-pagination
                                v-model:current-page="endpointsQueryDto.pageNum"
                                v-model:page-size="endpointsQueryDto.pageSize"
                                :page-sizes="[2, 5, 10, 20]"
                                layout="total, pager, sizes"
                                :total="total"
                                pager-count="5"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                            />
                        </div>
                    </div>
                </el-col>
                <el-col :span="14">
                
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<style scoped lang="less">
    .trace-main-container {
        width: 100%;
        height: 100%;
        
        .table-card {
            margin-top: 2%;
            
            .cascader-div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
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
                    margin-top: 2%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
</style>
