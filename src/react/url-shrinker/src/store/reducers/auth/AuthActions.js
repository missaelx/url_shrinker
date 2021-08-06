import {axiosInstance} from "../../../hoc/axios/Axios";
import * as actions from "../../Actions";

export const login = (email, password) => {
    return async (dispatch) => {
        try{
            let response = await axiosInstance.post("/auth/login", {
                email, password
            })
            dispatch({ type: actions.LOGIN, payload: response.data.data })
        } catch(error) {
            dispatch({ type: actions.LOGIN_ERROR, payload: error.response })
        }
    }
}