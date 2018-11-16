import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import routeTest from './routeTest';

const App = ({ history }) => (
    <Router history={history}>
        <Switch> 
            <Route exact path='/' component={routeTest} />
        </Switch>
    </Router>
);
App.propTypes = {
    history: PropTypes.shape({}).isRequired
};
export default App;

