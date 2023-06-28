import { createRouter, createWebHistory } from "vue-router";
import { routers } from "@/router/routers";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes: routers
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    const accessToken = authStore.token;
    if (
        !accessToken &&
        to.name !== 'login'
    ) {
        return { name: 'login' }
    } else {
        if ( to.name == 'login') {
            return { name: 'dashboard' }
        }
        next();
    }
})

export default router;