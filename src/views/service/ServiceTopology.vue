<script setup>
    import { ref } from "vue";
    import { getNamespaceList } from "@/api/service/index.js";
    import ServiceTopologyDiagram from "@/components/screen/ServiceTopologyDiagram.vue";
    
    const namespace = ref('')
    
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
    
    const serviceTopologyRef = ref()
</script>

<template>
    <div class="topology-container">
        <el-row>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/main' }">
                    主页
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    服务
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/service/topology' }">
                    服务拓扑
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <div class="search-bar">
            <el-autocomplete
                class="auto-complete-input"
                v-model="namespace"
                :fetch-suggestions="querySearch"
                clearable
                placeholder="请选择命名空间--默认为default"
                @select="serviceTopologyRef.getTopology()"
                style="width: 40%"
            >
                <template #prepend>
                    <el-icon>
                        <Filter/>
                    </el-icon>
                </template>
            </el-autocomplete>
        </div>
        <service-topology-diagram
            ref="serviceTopologyRef"
            :namespace="namespace"
            :symbolSize="50"
            :repulsion="200"
            :edgeLength="100"
        />
    </div>
</template>

<style scoped lang="less">
    .topology-container {
        width: 100%;
        height: 100%;
        
        .search-bar {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .card-container {
            margin-top: 2%;
            width: 100%;
            display: flex;
            justify-content: center;
            height: 85%;
            
            .el-card {
                display: flex;
                justify-content: center;
                width: 90%;
                
                #service-topology-dom {
                    width: 800px;
                    height: 500px;
                }
            }
        }
    }
</style>
