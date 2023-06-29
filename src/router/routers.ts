import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Detail from "@/views/Detail.vue";

export const routers = [
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