import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.SERVER_BASE_URL as string,
    timeout: 30000,
});
