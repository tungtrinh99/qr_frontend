import { createApp, getCurrentInstance } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import axiosInstance from "@/plugins/axios"
import moment from 'moment'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import i18n from "@/plugins/i18n"
import { createPinia } from "pinia"

const pinia = createPinia()
moment.locale('vi')
const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(pinia)

const { t: $t } = i18n.global;

const globalProperties = {
    $moment: moment,
    $axios: axiosInstance,
    $toast: useToast({
        position: 'top-right',
    }),
    $t: $t
}

app.mixin({
    beforeCreate: function () {
        const instance: any = getCurrentInstance();
        if (instance) {
            Object.assign(instance.proxy, globalProperties);
        }
    }
});

app.mount('#app')
