import * as actions from '../../Actions';

const initialState = {
    urls: [],
    url: null,
    created: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_URLS:
            return {
                ...state,
                urls: action.payload,
            };
        case actions.GET_URL:
            return {
                ...state,
                url: action.payload,
            };
        case actions.CREATE_URL:
            return {
                ...state,
                created: true,
            };
        case actions.RESET_CREATED_URL:
            return {
                ...state,
                created: false,
            };
        default:
            return state;
    }
};

export default reducer;
