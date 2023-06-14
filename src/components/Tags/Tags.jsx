import React from 'react';
import './Tags.scss';

const Tags = ({ tag, index }) => {
    return (

        <span key={index} className='span-tag'>{tag}</span>

    );
};

export default Tags;