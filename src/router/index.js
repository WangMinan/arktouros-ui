import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'default',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import("../views/main/DashBoard.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 挂载路由守卫 若请求头中没有access-token或refresh-token则跳转到登录页
router.beforeEach((to, from, next) => {
    // 挂载页面名称
    if (to.name) {
        document.title = 'arktouros-ui-' + to.name
    }
    return next()
})

export default router
