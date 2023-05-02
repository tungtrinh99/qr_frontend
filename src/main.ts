import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router";
// import axiosInstance from "@/plugins/axios";
import moment from 'moment';

moment.locale('vi')
const app = createApp(App);
app.use(router);

// app.config.globalProperties.$axios = {...axiosInstance};
app.config.globalProperties.$moment = moment;

app.mount('#app')
