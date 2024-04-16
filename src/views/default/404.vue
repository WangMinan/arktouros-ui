<script setup>
    import { useRouter } from "vue-router";
    const router = useRouter()
    
    const backHome = () => {
        router.push("/main")
    }
</script>

<template>
    <div class="notify-404-container">
        <el-card>
            <h1>哦吼 404</h1>
            <p>您访问的页面不存在,点击下方按钮跳转回到主页。</p>
            <el-button type="primary" @click="backHome">
                返回主页
            </el-button>
        </el-card>
    </div>
</template>

<style scoped lang="less">
    .notify-404-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .el-card {
            width: 40%;
            height: 30%;
            text-align: center;
        }
    }
</style>
