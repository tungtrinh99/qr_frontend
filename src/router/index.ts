import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Detail from "@/views/Detail.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: "login",
            component: Login,
        },
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