import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Detail from "@/views/Detail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            name: "dashboard",
            component: Dashboard,
        },
        {
            path: '/detail/:id',
            name: "detail",
            component: Detail,
        }
    ]
});

export default router;