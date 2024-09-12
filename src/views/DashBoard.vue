<script setup>
    import DashBoardAside from "@/components/basic/DashBoardAside.vue";
    import DashBoardHeader from "@/components/basic/DashBoardHeader.vue";
</script>

<template>
    <div class="dashBoardContainer">
        <el-container>
            <DashBoardAside />
            <el-container>
                <el-header>
                    <DashBoardHeader />
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less" scoped>
    .dashBoardContainer {
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
