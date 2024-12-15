import React from 'react';
import logement from '../assets/data/loge.json';
const Tag = ({tags}) => {
    return (
        <div className='Tags'>
            <span>tags={logement.tags} </span>
            
        </div>
    );
};

export default Tag;