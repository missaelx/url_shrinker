import * as actions from '../../Actions';

const initialState = {
    error: false, // there is any error?
    errorCode: null,
    status: null, //http code
    message: null,
    data: null,
    errorType: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.BAD_REQUEST:
        case actions.UNAUTHORIZED:
        case actions.FORBIDDEN:
        case actions.NOT_FOUND:
        case actions.SERVER_ERROR:
        case actions.VALIDATION_ERROR:
        case actions.TOKEN_ABSENT:
        case actions.INVALID_TOKEN:
        case actions.INVALID_CREDENTIALS:
            return {
                ...state,
                errorType: action.type,
                error: true,
                errorCode: action.payload.errorCode,
                status: action.payload.status,
                message: action.payload.message,
                data: action.payload.data,
            }
        case actions.CLEAR_NETWORK_ERROR:
            return {...initialState};
        default:
            return state;
    }
};

export default reducer;
