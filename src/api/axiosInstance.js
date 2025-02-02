import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://benificiaryappbackend-production.up.railway.app/', // Direct backend URL
    withCredentials: true,
});
