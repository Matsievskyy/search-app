import React from 'react';

const input = ({ onTextChange, value }) => (
    <input
        onKeyUp={event => 
            onTextChange(event.target.value)}
        defaultValue={ value }
        />
);

export default input;