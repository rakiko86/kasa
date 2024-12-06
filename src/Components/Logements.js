import React, { useEffect, useState } from 'react';
import Card from './Card';

const Logements = () => {
    const [data, setData]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // Récupérer les données du fichier JSON
            const response = await fetch('/src/Data/loge.json');
            const data = await response.json();
            
            // Utilisez les données récupérées ici
            setData(data);
          };
      
          fetchData();
    }, []);
    
    return (
        <div>
            
            <ul> {data.map((logement)=>(
                
                <Card key={logement.id} logement={logement} />
            ))}
                </ul> 
        </div>
    );
};

export default Logements;