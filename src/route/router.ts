//此文件封装成路由
import { Tree } from '@/utils/model/cl-router'
import { createRouter, getRouter } from '@/utils/cl-router'

const routes: Tree[] = [
    {
        path: '/apply',
        component: () => import('@/pages/apply/apply')
    },
    {
        path: '/',
        component: () => import('@/pages/home/home')
    }
]

function init() {
    createRouter({
        routers: routes
    })
}

export default {
    init,
}