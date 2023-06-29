import axios from "axios";
import { useAuthStore } from "@/stores/auth";

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
        // Handle 401 unauthorized error
        if (error.response && error.response.status === 401) {
            // Refresh the token or redirect to login page
            // Example: redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)


export default axiosInstance