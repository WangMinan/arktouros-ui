<script setup>
    import ServiceTopologyDiagram from "@/components/screen/ServiceTopologyDiagram.vue";
    import { ref } from "vue";
    import ServiceTopologyTimeline from "@/components/screen/ServiceTopologyTimeline.vue";
    
    const serviceTopologyDiagramRef = ref()
    
    defineProps({
        namespace: String,
        symbolSize: Number,
        repulsion: Number,
        edgeLength: Number
    })
    
    const getTopology = async () => {
        await serviceTopologyDiagramRef.value.getTopology()
    }
    
    defineExpose({
        getTopology
    })
    
    const updateTopology = async (timestamp) => {
        console.log(timestamp)
        // 这里可以传递timestamp到getTopology方法
        await serviceTopologyDiagramRef.value.getTopology();
    }
</script>

<template>
    <div class="card-container">
        <el-card>
            <service-topology-diagram
                ref="serviceTopologyDiagramRef"
                :namespace="namespace"
                :symbolSize="50"
                :repulsion="200"
                :edgeLength="100"
            />
            <service-topology-timeline
                @update-topology="updateTopology"
            />
        </el-card>
    </div>
</template>

<style scoped lang="less">
    .card-container {
        margin-top: 2%;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 90%;
        
        .el-card {
            display: flex;
            justify-content: center;
            width: 90%;
            
            #service-topology-dom {
                width: 800px;
                height: 420px;
            }
        }
    }
</style>
