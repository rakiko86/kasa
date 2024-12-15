import React from 'react';

const Tag = ({ logement }) => {
    const tags = logement.tags || [];
    console.log("Tags dans le composant Tag : ", tags); 

    return (
        <div className='Tags'>
            {tags.length > 0 ? (
                tags.map((tag, index) => (
                    <span key={index} className='tag'>{tag}</span>
                ))
            ) : (
                <span>Aucun tag disponible</span>
            )}
        </div>
    );
};

export default Tag;