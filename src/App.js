import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import routeTest from './pages/routeTest/index';
import Home from './Home';
import Ebbinghaus from './pages/Ebbinghaus/index';

const App = ({ history }) => (
    <Router history={history}>
        <Switch> 
            <Route exact path='/' exact component={Home} />
            <Route exact path='/hooksDemo' exact component={routeTest} />
            <Route exact path='/Ebbinghaus' exact component={Ebbinghaus} />
        </Switch>
    </Router>
);
App.propTypes = {
    history: PropTypes.shape({}).isRequired
};
export default App;

