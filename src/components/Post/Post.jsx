import React from 'react';

const post = ({ title, body, documentID }) => (
    <div>
        <h3>{title}</h3>
        <h6>{documentID}</h6>
        <p>{body}</p>
    </div>
);

export default post;