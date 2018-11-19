import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, BrowserRouter,Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const history = createBrowserHistory();
ReactDom.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('app'),
);