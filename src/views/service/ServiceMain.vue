<script setup>

</script>

<template>
    <div class="security-main-container">
        <el-row>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item>
                    <a href="/main">主页</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/main/service">服务概览</a>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <el-card class="table-card"></el-card>
    </div>
</template>

<style scoped lang="less">
    .security-main-container {
        width: 100%;
        height: 100%;
        .table-card {
            margin-top: 2%;
        }
    }
</style>
