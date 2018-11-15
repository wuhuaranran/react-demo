import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import { Router, Route } from 'react-router-dom';
import Hooks from '../components/hooks/hooks';
import Counter from '../components/hooks/counter';
import TextInputWithFocusButton from '../components/hooks/RefDemo';

const styles = {
    content:{
        padding: '30px',
        borderBottom: '1px solid'
    }
};
class App extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.content}>
                    <h1>demo1：useState，useEffect</h1>
                    <Hooks />
                    <Hooks />
                </div>
                <div style={styles.content}>
                    <h1>demo2：useReducer</h1>
                    <Counter />
                </div>
                <div style={styles.content}>
                    <h1>demo3：useRef</h1>
                    <TextInputWithFocusButton />
                </div>
            </div>
        );
    }
}
ReactDom.render(
    <App />,
    document.getElementById('app'),
);

