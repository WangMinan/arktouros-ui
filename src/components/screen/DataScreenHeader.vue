<script setup>

</script>

<template>
    <div class="header" id="header">
        <div class="l-content"></div>
        <div class="flex-grow"></div>
        <div class="r-content">
        </div>
    </div>
</template>

<style scoped lang="less">
    .header {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        background-color: #e9e9eb;
        
        .l-content {
            margin-left: 1%;
        }
        
        .flex-grow {
            flex-grow: 1;
        }
        
        .r-content {
            display: flex; /* 添加这个属性 */
            align-items: center; /* 确保这个属性在这里 */
            text-align: center;
            
            .el-space {
                margin-right: 1rem;
                
                .el-button {
                    .githubIcon {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }
        }
    }
    
    [class='light'] {
        body {
            background-color: #fff;
        }
    }
    
    [class='dark'] {
        body {
            background-color: #000;
        }
    }
    
    ::view-transition-old(root),
    ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
    }
    
    /* 进入dark模式和退出dark模式时，两个图像的位置顺序正好相反 */
    ::view-transition-old(root) {
        z-index: 1;
    }
    
    ::view-transition-new(root) {
        z-index: 2147483646;
    }
    
    /* 根据自己选择器修改 */
    [class='dark']::view-transition-old(root) {
        z-index: 2147483646;
    }
    
    [class='dark']::view-transition-new(root) {
        z-index: 1;
    }
</style>
