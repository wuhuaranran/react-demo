import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, BrowserRouter,Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import routeTest from './pages/routeTest';
import Home from './Home';

const history = createBrowserHistory();
// ReactDom.render(
//     // <Provider>
//     <App history={history} />,
//     // </Provider>,
//     document.getElementById('app'),
// );
ReactDom.render(
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/hooksDemo' exact component={routeTest} />
        </Switch>
    </Router >,
    document.getElementById('app')
);

