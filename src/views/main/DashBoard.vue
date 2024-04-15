<script setup>

import DashBoardAside from "@/components/basic/DashBoardAside.vue";
import DashBoardHeader from "@/components/basic/DashBoardHeader.vue";
</script>

<template>
    <div class="dashBoardContainer">
        <el-container>
            <el-aside>
                <DashBoardAside />
            </el-aside>
            <el-container>
                <el-header>
                    <DashBoardHeader />
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less" scoped>
    .dashBoardContainer {
        width: 100%;
        height: 100%;
        .el-container{
            height: 100%;
            width: 100%;
            .el-aside {
                max-width: 18%;
                border-right: 1px #000000 solid;
            }
            .el-header{
                padding: 0;
                max-height: 6%;
            }
            .el-main{
                // background-color: yellow;
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
