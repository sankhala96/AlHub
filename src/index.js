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
import setAuthorizationHeader from './utils/setAuthorizationHeader'
import {fetchCurrentUser, userFetched} from "./actions/users";

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.alhubJWT) {
    setAuthorizationHeader(localStorage.alhubJWT);
    store.dispatch(fetchCurrentUser());
}else {
    store.dispatch(userFetched({}));
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
