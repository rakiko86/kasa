import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';

const Error = () => {
    return (
        <div>
            <Banner />
            <img src="/404.png" alt="error" />
            <p>Oops! La page que vous demandez n'existe pas.</p>
            {/* Utilisation de Link pour les redirections internes */}
            <Link to="/">Retournez à la page d'Accueil</Link>
        </div>
    );
};

export default Error;
