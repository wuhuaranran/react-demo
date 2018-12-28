import React, { PureComponent } from 'react';
import { ReactDom } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

class Home extends PureComponent {
    render() {
        return (
            <div className={styles.content}>
                <h1>Hello,React~</h1>
                <Card style={{ width: 300 }} bordered={false}>
                    <Button type='primary'><Link to='/hooksDemo'>Hooks Demo</Link></Button>
                </Card>
                <Card style={{ width: 300 }} bordered={false}>
                    <Button type='primary'><Link to='/Ebbinghaus'>Ebbinghaus</Link></Button>
                </Card>    
                <Card style={{ width: 300 }} bordered={false}>
                    <Button type='primary'><Link to='/sky'>Sky</Link></Button>
                </Card>   
            </div>
        );
    }
}
export default Home;

