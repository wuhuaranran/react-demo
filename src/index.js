import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>Hello,React~</div>
        )
    }
}
ReactDom.render(
    <App />,
    document.getElementById('app'),
)