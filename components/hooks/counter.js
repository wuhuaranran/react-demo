import React, { useState, useEffect, useReducer } from 'react';
import { Button } from 'antd';

// const [state, dispatch] = useReducer(reducer, initialState);
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
    case 'reset':
        return initialState;
    case 'increment':
        return { count: state.count + 1 };
    case 'decrement':
        return { count: state.count - 1 };
    default:
        // A reducer must always return a valid state.
        // Alternatively you can throw an error if an invalid action is dispatched.
        return state;
    }
}

function Counter({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        { type: 'reset', payload: initialCount },
    );
    return (
        <div>
            Count: {state.count}
            <Button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </Button>
            <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        </div>
    );
}
export default Counter;
