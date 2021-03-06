import React, { useState, useEffect, useReducer } from 'react';
import { Button } from "antd";

function Hooks() {
    const [count, setCount] = useState(0);

    // 类似componentDidMount 和 componentDidUpdate:
    useEffect(() => {
    // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>
              Click me
            </Button>
        </div >
    );
}
export default Hooks;
