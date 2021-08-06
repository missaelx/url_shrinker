import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import { BrowserRouter,  } from 'react-router-dom';
import { store, persistor} from "./store/ConfigureStore"
import { PersistGate } from 'redux-persist/integration/react'
import {interceptor} from "./hoc/axios/Axios"
interceptor(store);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);