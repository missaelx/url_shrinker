import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider, useSelector} from 'react-redux';
import { BrowserRouter,  } from 'react-router-dom';
import { store, persistor} from "./store/ConfigureStore"
import { PersistGate } from 'redux-persist/integration/react'

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