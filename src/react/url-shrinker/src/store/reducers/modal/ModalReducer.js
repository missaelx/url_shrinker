import * as actionTypes from '../../Actions';
import * as modalTypes from "../../../utils/ModalTypes";

const initialState = {
    isOpen: false,
    title: "",
    additionalData: null,
    type: modalTypes.ALERT,
    mainContent: null //used for alert
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return {
                ...state,
                isOpen: true,
                title: action.payload.title,
                additionalData: action.payload.additionalData,
                type: action.payload.type,
                mainContent: action.payload.mainContent
            };
        case actionTypes.HIDE_MODAL:
            return {
                ...state,
                isOpen: false
            };
        default:
            return state;
    }
};

export default reducer;
