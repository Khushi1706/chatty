import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import setupSocket from './sockets'


import reducers from './reducers'
import handleNewMessage from './sagas'
import username from './utils/name'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
    reducers,applyMiddleware(sagaMiddleWare)
)

const  socket = setupSocket(store.dispatch,username)
sagaMiddleWare.run(handleNewMessage , {socket , username}) 

ReactDOM.render(
<Provider store = {store}>
    <App/>
    </Provider>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//cacls myfile.txt /g everyone:f = sudo chmod myfiletxt 0777