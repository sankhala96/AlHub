import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import registerServiceWorker from './registerServiceWorker';
import {userLoggedIn} from "./actions/auth";

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.alhubJWT) {
    // const payload = decode(localStorage.bookwormJWT);
    const user = {
        token: localStorage.alhubJWT
        // email: payload.email,
        // confirmed: payload.confirmed
    };
    // setAuthorizationHeader(localStorage.bookwormJWT);
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
