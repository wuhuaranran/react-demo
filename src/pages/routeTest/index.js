import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import { Router, Route, Link } from 'react-router-dom';
import { Hooks, Counter, RefDemo } from 'components';
import styles from './index.less';
class RouteTest extends PureComponent {
    render() {
        return (
            <div className={styles.layout}>
                <Button type='primary'><Link to='/'>首页</Link></Button>
                <div className={styles.content}>
                    <h1>demo1：useState，useEffect</h1>
                    <Hooks />
                    <Hooks />
                </div>
                <div className={styles.content}>
                    <h1>demo2：useReducer</h1>
                    <Counter />
                </div>
                <div className={styles.content}>
                    <h1>demo3：useRef</h1>
                    <RefDemo />
                </div>
            </div>
        );
    }
}
export default RouteTest;

