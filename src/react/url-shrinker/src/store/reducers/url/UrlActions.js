import {axiosInstance} from "../../../hoc/axios/Axios";
import * as actions from "../../Actions";

export const create = (url) => {
    console.log("Entre a reate")
    return async (dispatch) => {
        try{
            let response = await axiosInstance.post("/api/url", {
                url
            })
            dispatch({ type: actions.CREATE_URL, payload: response.data.data })
        } catch(error) {
            console.error(error)
        }
    }
}

export const get = () => {
    return async (dispatch) => {
        try{
            let response = await axiosInstance.get("/api/url")
            dispatch({ type: actions.GET_URLS, payload: response.data.data })
        } catch(error) {
            console.error(error)
        }
    }
}

export const getOne = (id) => {
    return async (dispatch) => {
        try{
            let response = await axiosInstance.get("/api/url/" + id)
            dispatch({ type: actions.GET_URL, payload: response.data.data })
        } catch(error) {
            console.error(error)
        }
    }
}