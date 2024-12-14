import React, { useEffect, useState } from 'react';
import Card from './Card';
import "../Styles/Pages/index.scss"
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
      
            <div className='card-container'>
              
                {
                    data.map((logement)=>( 
                        <Card
              cover={logement.cover}
              title={logement.title}
              key={logement.id}
            />

                    ))
                }
            </div>
        
    );
};

export default Logements;
