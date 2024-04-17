import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './assets/style/main.css'

// 引入黑夜模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 引入自定义黑色主题
import './assets/style/dark.less'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// pinia持久化插件
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App)
    .use(createPinia().use(piniaPluginPersistedState))
    .use(router)
    .use(ElementPlus, {
        locale: zhCn
    })

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
