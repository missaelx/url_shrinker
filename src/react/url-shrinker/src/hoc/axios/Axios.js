import axios from 'axios';
import Config from "../../utils/Config";
import * as actions from '../../store/Actions';

const ERRORS = Object.freeze({
    TOKEN_ABSENT: 1,
    INVALID_TOKEN: 2,
    VALIDATION: 3,
    INVALID_CREDENTIALS: 4
});

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
            if(! error.response){
                console.log("unknown error");
                console.error(error);
                return Promise.reject(error);
            }
            let status = error.response.data.status;
            let message = error.response.data.message;
            let data = error.response.data.data;
            let errorCode = error.response.data.error_code;

            switch (status){
                case 500:
                    store.dispatch({type: actions.SERVER_ERROR, payload: {message, status, data, errorCode}})
                    break;
                case 404:
                    store.dispatch({type: actions.NOT_FOUND, payload: {message, status, data, errorCode}})
                    break;
                case 403:
                    if(errorCode === ERRORS.VALIDATION)
                        store.dispatch({type: actions.VALIDATION_ERROR, payload: {message, status, data, errorCode}})
                    else
                        store.dispatch({type: actions.FORBIDDEN, payload: {message, status, data, errorCode}})
                    break;
                case 401:
                    if(errorCode === ERRORS.TOKEN_ABSENT)
                        store.dispatch({type: actions.TOKEN_ABSENT, payload: {message, status, data, errorCode}})
                    else if(errorCode === ERRORS.INVALID_TOKEN)
                        store.dispatch({type: actions.INVALID_TOKEN, payload: {message, status, data, errorCode}})
                    else if(errorCode === ERRORS.INVALID_CREDENTIALS)
                        store.dispatch({type: actions.INVALID_CREDENTIALS, payload: {message, status, data, errorCode}})
                    else
                        store.dispatch({type: actions.UNAUTHORIZED, payload: {message, status, data, errorCode}})
                    break;
                case 400:
                    store.dispatch({type: actions.BAD_REQUEST, payload: {message, status, data, errorCode}})
                    break;
            }
            return Promise.reject(error);
        }
    );
}
