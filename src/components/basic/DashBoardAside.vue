<script setup>
    import { onMounted, ref, watch } from "vue";
    import { useAsideStore } from "@/store/aside/index.js";
    import { storeToRefs } from "pinia";
    
    const isCollapse = ref(false)
    const defaultActive = ref('')
    
    const asideStore = useAsideStore()
    const {currentAside} = storeToRefs(asideStore)
    
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
    
    watch(currentAside, (newVal) => {
        defaultActive.value = newVal.active
        isCollapse.value = newVal.isCollapse
    }, { deep: true })
</script>

<template>
    <el-aside :width="isCollapse ? '4rem':'12rem'">
        <div class="collapse-btn">
            <div>
                <el-image class="logo-image" :src="getLogoUrl()">
                    <template #error>
                        <div class="image-slot">
                            <el-icon>
                                <Picture/>
                            </el-icon>
                        </div>
                    </template>
                </el-image>
            </div>
            <div>
                <el-button size="small" type="primary" @click="toggleCollapse">
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
            <el-sub-menu index="1">
                <template #title>
                    <div class="sub-menu-title">
                        <img class="menu-icon"
                             src="@/assets/images/side-icons/service.svg"
                             alt="service"/>
                        <!-- 这玩意不会跟着collapse做联动 需要手动调一下 -->
                        <span v-if="!isCollapse">服务</span>
                    </div>
                </template>
                <el-menu-item index="/main/service/table">
                    <span>服务总览</span>
                </el-menu-item>
                <el-menu-item index="/main/service/topology">
                    <span>服务拓扑</span>
                </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <div class="sub-menu-title">
                        <img class="menu-icon"
                             src="@/assets/images/side-icons/nerve.svg"
                             alt="trace"/>
                        <!-- 这玩意不会跟着collapse做联动 需要手动调一下 -->
                        <span v-if="!isCollapse">链路</span>
                    </div>
                </template>
                <el-menu-item index="/main/trace/timeout">
                    <span>超时统计</span>
                </el-menu-item>
                <el-menu-item index="/main/trace/dashboard">
                    <span>调用链路</span>
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/main/metric">
                <img class="menu-icon"
                     src="@/assets/images/side-icons/line-chart.svg"
                     alt="metrics"/>
                <span>数值</span>
            </el-menu-item>
            <el-menu-item index="/main/log">
                <img class="menu-icon"
                     src="@/assets/images/side-icons/log.svg"
                     alt="logs"/>
                <span>日志</span>
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
        // 引用 --el-menu-border-color
        border-right: 1px solid var(--el-menu-border-color);
        
        .el-menu {
            border-right: none;
        }
    }
    
    .logo-image {
        // 底色换白
        width: 4rem;
        height: 4rem;
        
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
    
    .sub-menu-title, .el-menu-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    .menu-icon {
        width: 1.5rem;
        height: 1.5rem;
    }
</style>
