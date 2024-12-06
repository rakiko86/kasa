import React from 'react';

const Card = ({logement}) => {
    
    return (
        <li className='card'>
            <div className='infos'>
                <h2>{logement.title} </h2>
            </div>
            
        </li>
    );
};

export default Card;