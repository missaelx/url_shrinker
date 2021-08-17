import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/reducersIndex';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', "network", "url"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let composeValue;
// if(process.env.REACT_APP_DEBUG === "true"){
    composeValue = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// } else {
//     composeValue = compose(applyMiddleware(thunk))
// }

export const store = createStore(persistedReducer, composeValue)

export const persistor =  persistStore(store)
