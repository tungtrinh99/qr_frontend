import axios from "axios"
import { useAuthStore } from "@/stores/auth"
import { useToast } from 'vue-toast-notification'

const API_URL = process.env.API_URL;

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    async function (config) {
        const authStore = useAuthStore();

        const token = authStore.token;

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token')
            window.location.href = '/login'
            useToast({
                position: 'top-right',
            }).error('Phiên đăng nhập đã hết hạn');
        }
        return Promise.reject(error);
    }
)


export default axiosInstance