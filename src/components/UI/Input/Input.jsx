import React from 'react';

const input = ({ onTextChange }) => (
    <input
        onKeyUp={event => 
            onTextChange(event.target.value)}/>
);

export default input;