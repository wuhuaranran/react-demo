import React, { PureComponent } from 'react';
import { ReactDom } from 'react-dom';
import { Link } from 'react-router-dom';
import {Button} from 'antd';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h1>Hello,React~</h1>
                <Link to='/hooksDemo'>Hooks Demo</Link>
            </div>
        );
    }
}
export default Home;

