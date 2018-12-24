import React, { PureComponent } from 'react';
import { ReactDom } from 'react-dom';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import classNames from 'classnames';
import styles from './index.less';

class Home extends PureComponent {
    render() {
        return (
            <div className={styles.content}>
                <h1>Hello,React~</h1>
                <Button type='primary'><Link to='/hooksDemo'>Hooks Demo</Link></Button>
                <Button type='primary'><Link to='/Ebbinghaus'>Ebbinghaus</Link></Button>
            </div>
        );
    }
}
export default Home;

