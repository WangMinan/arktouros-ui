<script setup>
    import { onMounted, ref } from "vue";
    import { useAsideStore } from "@/store/aside/index.js";
    import { storeToRefs } from "pinia";
    
    const isCollapse = ref(true)
    const defaultActive = ref('')
    
    const asideStore = useAsideStore()
    const { currentAside } = storeToRefs(asideStore)
    
    const toggleCollapse = () => {
        isCollapse.value = !isCollapse.value
        asideStore.$patch((state) => {
            state.currentAside.isCollapse = isCollapse.value
        })
    }
    
    onMounted(() => {
        defaultActive.value = currentAside.value.active
        isCollapse.value = currentAside.value.isCollapse
    })
    
    const getLogoUrl = () => {
        return new URL('@/assets/images/arktouros.png', import.meta.url).href
    }
    
    const updateStore = (key) => {
        asideStore.$patch((state) => {
            state.currentAside.active = key
        })
    }
</script>

<template>
    <el-aside :width="isCollapse ? '6rem':'12rem'">
        <div class="collapse-btn">
            <div>
                <el-image class="logo-image" :src="getLogoUrl()">
                    <template #error>
                        <div class="image-slot">
                            <el-icon><Picture /></el-icon>
                        </div>
                    </template>
                </el-image>
            </div>
            <div>
                <el-button size="small" @click="toggleCollapse">
                    {{ isCollapse ? '>>>' : '<<<' }}
                </el-button>
            </div>
        </div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
            :collapse="isCollapse"
            router
            :default-active="defaultActive"
            @select="updateStore"
        >
            <el-menu-item index="/main/service">
            
            </el-menu-item>
            <el-menu-item index="/main/trace">
            
            </el-menu-item>
            <el-menu-item index="/main/metric">
            
            </el-menu-item>
            <el-menu-item index="/main/log">
            
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<style scoped lang="less">
    .el-aside {
        // 横向动画时间
        transition: width 0.2s;
        -webkit-transition: width 0.2s;
        -moz-transition: width 0.2s;
        -o-transition: width 0.2s;
        // 消除横向滚动条
        overflow-x: hidden;
    }
    
    .logo-image {
        // 底色换白
        width: 5rem;
        height: 5rem;
        .image-slot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background: var(--el-fill-color-light);
            color: var(--el-text-color-secondary);
            font-size: 30px;
        }
    }
    
    .collapse-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 3%;
    }
</style>
