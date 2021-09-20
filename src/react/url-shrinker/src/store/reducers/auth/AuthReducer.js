import * as actionTypes from '../../Actions';

const initialState = {
    isAuthenticated: false,
    token: null,
    expiresIn: null,
    user: null,
    error: null,
    badCredentials: false,
    signinUser: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                expiresIn: action.payload.expires,
                user: action.payload.user,
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload.data.error,
            };
        case actionTypes.SIGNIN:
            return {
                ...state,
                signinUser: action.payload.email
            }
        case actionTypes.SIGNIN_ERROR:
            return {
                ...state,
                error: action.payload.data
            }
        case actionTypes.RESET_AUTH:
            return {
                ...state,
                signinUser: "",
            }

        default:
            return state;
    }
};

export default reducer;
