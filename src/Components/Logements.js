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
              
                
                {
                    data.map((logement)=>( 
                        <Card
              cover={logement.cover}
              title={logement.title}
              id={logement.id}
            />

                    ))
                }
            </div>
        </div>
    );
};

export default Logements;
