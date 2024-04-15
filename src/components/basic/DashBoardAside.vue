<script setup>
    import { ref } from "vue";
    
    const isCollapse = ref(false)
    const handleOpen = () => {
        isCollapse.value = false
    }
    const handleClose = () => {
        isCollapse.value = true
    }
</script>

<template>
    <div class="dashboardAsideContainer">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-sub-menu index="1">
            </el-sub-menu>
            <el-sub-menu index="2">
            </el-sub-menu>
            <el-sub-menu index="3">
            </el-sub-menu>
            <el-sub-menu index="4">
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<style scoped lang="less">
    .dashBoardContainer {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    }
</style>
