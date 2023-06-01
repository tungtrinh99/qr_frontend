import axios from "axios";
// require('dotenv').config();

const API_URL = 'https://prisma-postgres-eight.vercel.app/';
console.log("API_URL", API_URL);


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


export default axiosInstance