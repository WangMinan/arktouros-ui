<script setup>
    import { onMounted, reactive, ref } from "vue";
    import { getNamespaceList, getServiceList } from "@/api/service/index.js";
    import { deleteAllDataFromDB } from "@/api/common/index.js";
    import { ElLoading, ElMessage } from "element-plus";
    import { useRouter } from "vue-router";
    
    const router = useRouter()
    
    const querySearch = async (queryString, cb) => {
        const data = await getNamespaceList(queryString)
        if (data === null) {
            return
        }
        // 组织成对象的list {value:"xx"}
        const results = data.result.map(item => {
            if (item) {
                return {
                    value: item
                }
            }
            // 这个位置在上行的时候要重新做处理的
            return {
                value: 'null'
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
        // 将data.result转移到serviceList中
        if (baseQueryDto.namespace === 'null') {
            baseQueryDto.namespace = ''
        }
        const data = await getServiceList(baseQueryDto)
        if (data === null) {
            return
        }
        total.value = parseInt(data.result.total)
        const tmpList = data.result.data
        // tmpList中每个对象的status属性 如果是true 改为在线 如果为false 改为异常或离线
        tmpList.forEach(item => {
            if (item.status === true) {
                item.status = '在线'
            } else {
                item.status = '异常或离线'
            }
            if (!item.name) {
                item.name = 'null'
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
    
    const deleteAllData = async () => {
        const loading = ElLoading.service({
            lock: true,
            text: '正在执行数据运维操作，请等待。',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        try {
            const data = await deleteAllDataFromDB()
            if (data === null || data.result.length === 0) {
                return
            }
            ElMessage.success('删除所有数值数据成功')
        } finally {
            loading.close()
            serviceList.value = []
            router.go(0)
        }
    }
</script>

<template>
    <div class="security-main-container">
        <!-- 面包屑 -->
        <el-row class="breadcrumb-header-row">
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/service">服务概览</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
            <el-tooltip placement="bottom">
                <template #content>
                    点击该按钮将会<b style="color: red">删除数据库中所有数据</b>，请确保您知晓该操作将带来的后果。 <br/>
                    删除操作将锁定用户界面直至删除完成。 <br/>
                    如果您处于<b style="color: red">离线数据批量导入模式</b>，该操作将同时删除您存储在输入日志文件夹下的所有日志文件。
                </template>
                <el-button type="danger" @click="deleteAllData">
                    删除所有数据
                </el-button>
            </el-tooltip>
        </el-row>
        <!-- 表格card -->
        <el-card class="table-card">
            <div class="search-bar">
                <el-row :gutter="15">
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
                </el-row>
            </div>
            <el-divider/>
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
                    layout="total, prev, pager, next, sizes"
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
        
        .breadcrumb-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .table-card {
            margin-top: 1%;
            
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
