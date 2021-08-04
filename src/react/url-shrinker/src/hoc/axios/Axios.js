import axios from 'axios';
import Config from "../../utils/Config";

export const axiosInstance = axios.create({
    baseURL: Config.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    }
});

export const interceptor = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers.Authorization = (store.getState().auth.token) ? `Bearer ${store.getState().auth.token}` : '';
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (next) => {
            return Promise.resolve(next);
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}
