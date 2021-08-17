import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import AuthReducer from './auth/AuthReducer';
import NetworkReducer from "./network/NetworkReducer";
import UrlReducer from "./url/UrlReducer";
import ModalReducer from "./modal/ModalReducer";
import * as actions from "../Actions";

const appReducers = combineReducers({
    auth: AuthReducer,
    network: NetworkReducer,
    url: UrlReducer,
    modal: ModalReducer
});

const rootReducer = (state, action) => {
    if(action.type === actions.LOGOUT){
        state = undefined;
        storage.removeItem('persist:root')
    }

    return appReducers(state, action);
};

export default rootReducer;
