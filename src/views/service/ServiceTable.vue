<script setup>
    import { onMounted, reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    
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
    
    const serviceList = ref([])
    
    const baseQueryDto = reactive({
        query: '',
        namespace: '',
        pageNum: 1,
        pageSize: 10
    })
    
    const total = ref(0)
    
    onMounted(async () => {
        await toggleServiceList()
    })
    
    const toggleServiceList = async () => {
        const data = await getServiceList(baseQueryDto)
        if (data === null) {
            return
        }
        // 将data.result转移到serviceList中
        total.value = parseInt(data.result.total)
        const tmpList = data.result.data
        // tmpList中每个对象的status属性 如果是true 改为在线 如果为false 改为离线或未知
        tmpList.forEach(item => {
            if (item.status === true) {
                item.status = '在线'
            } else {
                item.status = '离线或未知'
            }
        })
        serviceList.value = tmpList
    }
    
    const handleSizeChange = async (newSize) => {
        baseQueryDto.pageSize = newSize
        await toggleServiceList()
    }
    
    const handleCurrentChange = async (newPage) => {
        baseQueryDto.pageNum = newPage
        await toggleServiceList()
    }
    
    // dialog有关
    const dialogVisible = ref(false)
    
    const getServiceDetail = (serviceId) => {
        // 根据Id从serviceList里把服务拉到tmpService
        tmpService.value = serviceList.value.find(item => item.id === serviceId)
        dialogVisible.value = true
    }
    
    const tmpService = ref({})
</script>

<template>
    <div class="security-main-container">
        <el-row>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/service">服务概览</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-card class="table-card">
            <div class="search-bar">
                <el-row :gutter="15">
                    <el-col :span="12">
                        <div style="display: flex; justify-content: center">
                            <el-input
                                class="auto-complete-input"
                                v-model="baseQueryDto.query"
                                clearable
                                placeholder="服务名前缀搜索"
                                style="width: 80%"
                                @change="toggleServiceList"
                            >
                                <template #prepend>
                                    <el-icon>
                                        <Search/>
                                    </el-icon>
                                </template>
                            </el-input>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div style="display: flex; justify-content: center">
                            <el-autocomplete
                                class="auto-complete-input"
                                v-model="baseQueryDto.namespace"
                                :fetch-suggestions="querySearch"
                                clearable
                                placeholder="请选择命名空间--默认为default"
                                @select="toggleServiceList"
                                style="width: 80%"
                            >
                                <template #prepend>
                                    <el-icon>
                                        <Filter/>
                                    </el-icon>
                                </template>
                            </el-autocomplete>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="table-div">
                <el-table :data="serviceList"
                          stripe
                >
                    <el-table-column prop="name" label="服务名"/>
                    <el-table-column prop="namespace" label="命名空间"/>
                    <el-table-column prop="nodeName" label="节点名称"/>
                    <el-table-column prop="latency" label="时延"/>
                    <el-table-column prop="status" label="状态"/>
                    <el-table-column fixed="right" label="操作">
                        <template #default="scope">
                            <el-tooltip effect="light"
                                        content="查看服务具体信息" placement="top"
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
                    v-model:current-page="baseQueryDto.pageNum"
                    v-model:page-size="baseQueryDto.pageSize"
                    :page-sizes="[2, 5, 10, 20]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </div>
        </el-card>
    </div>
    
    <!-- Dialog部分 -->
    <el-dialog
        v-model="dialogVisible"
        :title="'Service: ' + tmpService.name "
        width="60%"
    >
        <el-form
            label-position="left"
            label-width="auto"
            :model="tmpService"
            disabled
        >
            <el-form-item label="Id">
                <el-input v-model="tmpService.id"/>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="tmpService.name"/>
            </el-form-item>
            <el-form-item label="命名空间">
                <el-input v-model="tmpService.service"/>
            </el-form-item>
            <el-form-item label="节点Id">
                <el-input v-model="tmpService.nodeId"/>
            </el-form-item>
            <el-form-item label="节点名称">
                <el-input v-model="tmpService.nodeName"/>
            </el-form-item>
            <el-form-item label="元素类型">
                <el-input v-model="tmpService.type"/>
            </el-form-item>
            <el-form-item label="延迟">
                <el-input v-model="tmpService.latency"/>
            </el-form-item>
            <el-form-item label="HTTP状态码">
                <el-input v-model="tmpService.httpStatusCode"/>
            </el-form-item>
            <el-form-item label="RPC状态码">
                <el-input v-model="tmpService.rpcStatusCode"/>
            </el-form-item>
            <el-form-item label="状态">
                <el-input v-model="tmpService.status"/>
            </el-form-item>
            <el-form-item label="标签">
                <el-input v-model="tmpService.tags"/>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<style scoped lang="less">
    .security-main-container {
        width: 100%;
        height: 100%;
        
        .table-card {
            margin-top: 2%;
            
            .table-div {
                margin-top: 2%;
                width: 100%;
                display: flex;
                justify-content: center;
                
                .el-table {
                    width: 80%;
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
</style>
