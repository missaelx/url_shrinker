import axios from "axios";
import * as actions from "../../Actions";
import * as modalTypes from "../../../utils/ModalTypes";
import Config from "../../../utils/Config";


export const getLocation = ip => {
    return async (dispatch) => {
        try{
            let response = await axios.get(`https://tools.keycdn.com/geo.json?host=${ip}`, {
                "headers" : {
                    "User-Agent": `keycdn-tools:${Config.geoClientUrl}`,
                    "Access-Control-Allow-Origin": "*"
                }
            });
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