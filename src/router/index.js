import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/main'
    },
    {
        path: '/screen',
        name: 'dataScreen',
        meta: {
            title: 'Arktouros-DataScreen'
        },
        component: () => import("@/views/DataScreen.vue")
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            title: 'Arktouros-UI'
        },
        component: () => import("@/views/DashBoard.vue"),
        redirect: '/main/default',
        children: [
            {
                path: 'default',
                name: 'default',
                meta: {
                    title: 'Arktouros|Default'
                },
                component: () => import("@/views/default/DashBoardMain.vue")
            },
            {
                path: 'service',
                name: 'service',
                meta: {
                    title: 'Arktouros|Service'
                },
                children: [
                    {
                        path: 'table',
                        name: 'table',
                        meta: {
                            title: 'Arktouros|Service|Table'
                        },
                        component: () => import("@/views/service/ServiceTable.vue")
                    },
                    {
                        path: 'topology',
                        name: 'topology',
                        meta: {
                            title: 'Arktouros|Service|Topology'
                        },
                        component: () => import("@/views/service/ServiceTopology.vue")
                    }
                ]
            },
            {
                path: 'log',
                name: 'log',
                meta: {
                    title: 'Arktouros|Log'
                },
                component: () => import("@/views/log/LogMain.vue")
            },
            {
                path: 'metric',
                name: 'metric',
                meta: {
                    title: 'Arktouros|Metric'
                },
                component: () => import("@/views/metric/MetricDashboard.vue")
            },
            {
                path: 'trace',
                name: 'trace',
                meta: {
                    title: 'Arktouros|Trace'
                },
                children:
                [
                    {
                        path: 'dashboard',
                        name: 'traceDashboard',
                        meta: {
                            title: 'Arktouros|Trace|Dashboard'
                        },
                        component: () => import("@/views/trace/TraceDashboard.vue")
                    },
                    {
                        path: "timeout",
                        name: "traceTimeout",
                        meta: {
                            title: 'Arktouros|Trace|Timeout'
                        },
                        component: () => import("@/views/trace/TraceTimeout.vue")
                    }
                ]
            }
        ]
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/default/404.vue'),
        meta: {
            title: '您访问的页面不存在'
        }
    },
    // 所有未定义路由，全部重定向到404页，必须放在最后
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 挂载路由守卫 若请求头中没有access-token或refresh-token则跳转到登录页
router.beforeEach((to, from, next) => {
    // 挂载页面名称
    if (to.meta.title) {
        document.title = to.meta.title
    }
    return next()
})

export default router
