import React from 'react';
import "../Styles/Pages/index.scss";

const Host = ({ host }) => {
    if (!host) {
        return <div>Aucun hôte disponible</div>;
    }

    // Séparation du nom complet en prénom et nom
    const [firstName, lastName] = host.name.split(" ");

    return (
        <div className="host">
            <span  className="host-name">
            <p >{firstName}</p>
            <p >{lastName}</p> 
            </span> 
            {host.picture && (
                <img 
                    src={host.picture} 
                    alt={`Portrait de ${firstName} ${lastName}`} 
                    className="host-picture" 
                />
            )}
        </div>
    );
};

export default Host;