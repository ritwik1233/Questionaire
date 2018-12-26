import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import axios from 'axios';
import reduxThunk from 'redux-thunk';

window.axios=axios;

const store=createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
    <Routes />
    </Provider>
    , document.getElementById('root'));
