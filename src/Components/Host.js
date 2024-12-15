import React from 'react';

const Host = ({ host }) => {
    if (!host) {
        return <div>Aucun hôte disponible</div>;
    }

    return (
        <div className="host">
            <p className="host-name">{host.name}</p>
            {host.picture && (
                <img 
                    src={host.picture} 
                    alt={`Portrait de ${host.name}`} 
                    className="host-picture" 
                />
            )}
        </div>
    );
};

export default Host;