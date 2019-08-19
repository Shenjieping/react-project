import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducers from './store/reducers';
import AppRouter from './router';

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);

const APP = (
    <Provider  store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(APP, document.getElementById('root'));
