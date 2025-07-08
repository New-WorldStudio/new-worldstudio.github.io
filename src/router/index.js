import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/home/Index.vue";
import About from "@/views/about/Index.vue";
import Knowledge from "@/views/support/knowledge/Index.vue";
// 三级路由


// 二级路由


// 一级路由
const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页 | NewWorld新世界'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于我们'
        }
    },
    {
        path: '/knowledge',
        component: Knowledge,
        meta: {
            title: '共享知识库'
        }

    }
]


// 创建router
const route = createRouter({
    history: createWebHashHistory(), // 使用Hash路由
    routes
})

// 动态设置网页标题
route.afterEach((to, from, next) => {
    const defaultTile = 'NewWorld 新世界工作室官网';
    document.title = to.meta.title || defaultTile;
})

export default route;