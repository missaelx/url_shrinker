import axios from "axios";
import * as actions from "../../Actions";
import * as modalTypes from "../../../utils/ModalTypes";

export const getLocation = ip => {
    return async (dispatch) => {
        try{
            let response = await axios.get(`http://www.geoplugin.net/json.gp?ip=${ip}`);
            console.log("Service response", response);

            dispatch({
                type: actions.SHOW_MODAL,
                payload: {
                    title: `Geolocation for ${ip}`,
                    type: modalTypes.GEOLOCATION,
                    additionalData: {
                        ...response.data
                    }
                }})
        } catch(error) {
            alert("Error en consola");
            console.log(error);
        }
    }
}