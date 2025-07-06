import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/home/Index.vue";
import Support from "@/views/support/Index.vue";


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/support',
        component: Support
    }
]

const route = createRouter({
    history: createWebHashHistory(),
    routes
})

export default route;