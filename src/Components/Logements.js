import React, { useEffect, useState } from 'react';
import Card from './Card';
import "../Styles/Components/_logements.scss"
const Logements = () => {
    const [data, setData]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // Récupérer les données du fichier JSON
            const response = await fetch('/src/Data/loge.json');
            const logementData = await response.json();
            
            // Utilisez les données récupérées ici
            setData(logementData);
        };
    
        fetchData();
    }, []);
    
    return (
        <div className='logement'>
            <div className='card-container'>
                <ul>
                    {data.map((logement) => (
                         <li key={logement.id}>{logement.title}
                    
                    <img src={logement.cover} alt={logement.title}   />
                
                             <Card logement={logement} />
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Logements;
