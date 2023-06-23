import { createApp, getCurrentInstance } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router";
import axiosInstance from "@/plugins/axios";
import moment from 'moment';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import i18n from "@/plugins/i18n";

moment.locale('vi')
const app = createApp(App);
app.use(router);
app.use(i18n);
const { t: $t } = i18n.global;

const globalProperties = {
    $moment: moment,
    $axios: axiosInstance,
    $toast: useToast(),
    $t: $t
}

app.mixin({
    beforeCreate() {
        const instance = getCurrentInstance();
        if (instance) {
            Object.assign(instance.proxy, globalProperties);
        }
    }
});

app.mount('#app')
