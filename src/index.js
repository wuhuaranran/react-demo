import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';
import Hooks from './hooks';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hooks /> 
                <Hooks />
            </div>
        )
    }

}
ReactDom.render(
    <App />,
    document.getElementById('app'),
)