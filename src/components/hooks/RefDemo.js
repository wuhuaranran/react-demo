import React, { useState, useEffect, useRef } from 'react';
import { Button, Input } from 'antd';

function RefDemo() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
    // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <div>
            <Input ref={inputEl} type="text" />
            <Button onClick={onButtonClick}>Focus the input</Button>
        </div>
    );
}
export default RefDemo;
