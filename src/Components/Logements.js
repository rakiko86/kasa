
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import "../Styles/Pages/index.scss";

const Logements = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Récupérer les données du fichier JSON
            const response = await fetch('src/data/loge.json'); // Assurez-vous que le chemin est correct
            const logementData = await response.json();
            
            // Utilisez les données récupérées ici
            setData(logementData);
        };
    
        fetchData();
    }, []);
    
    return (
        <div className='card-container'>
            {
                data.map((logement) => (
                    <Link to={`/page/${logement.id}`} key={logement.id} className="card-link">
                        <Card
                            cover={logement.cover}
                            title={logement.title}
                        />
                    </Link>
                ))
            }
        </div>
    );
};

export default Logements;