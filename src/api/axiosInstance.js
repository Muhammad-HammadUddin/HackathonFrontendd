import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://benificiaryappbackend-production-6862.up.railway.app/', // Direct backend URL
    withCredentials: true,
});
