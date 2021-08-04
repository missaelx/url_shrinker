import {axiosInstance} from "../../../hoc/axios/Axios";
import * as actions from "../../Actions";

export const login = (email, password) => {
    return (dispatch, getState) => {
        return axiosInstance.post("/auth/login", {
            email, password
        })
        .then(res => {
            dispatch({ type: actions.LOGIN, payload: res.data.data })
        }).catch(error => {
            console.info(error)
            dispatch({ type: actions.LOGIN_ERROR, payload: error.response })
        })
    }
}