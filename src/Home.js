import React, { PureComponent } from 'react';
import { ReactDom } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

class Home extends PureComponent {
    pages = [
        {
            url: '/hooksDemo',
            title: 'Hooks Demo'
        }, {
            url: '/Ebbinghaus',
            title: 'Ebbinghaus'
        }, {
            url: '/sky',
            title: 'sky'
        }, {
            url: '/snow',
            title: '雪落❄'
        }
    ]
    render() {
        return (
            <div className={styles.content}>
                <h1>Hello,React~</h1>
                {this.pages.map(item=>(
                    <Card style={{ width: 300 }} bordered={false}>
                        <Button type='primary'><Link to={item.url}>{item.title}</Link></Button>
                    </Card>
                ))}
            </div>
        );
    }
}
export default Home;

