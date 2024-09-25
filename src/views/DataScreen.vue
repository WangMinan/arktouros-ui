<script setup>
    import DataScreenHeader from "@/components/screen/DataScreenHeader.vue";
    import DataScreenMain from "@/views/dataScreen/DataScreenMain.vue";
</script>

<template>
    <div class="dataScreenContainer">
        <el-container>
            <el-header>
                <DataScreenHeader/>
            </el-header>
            <el-main>
                <DataScreenMain/>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped lang="less">
    .dataScreenContainer {
        width: 100%;
        height: 100%;
        
        .el-container {
            height: 100%;
            width: 100%;
            
            .el-header {
                padding: 0;
                max-height: 6%;
            }
            
            .el-main {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
