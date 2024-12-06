import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import Logo from '../Components/Logo';
import Footer from '../Components/Footer';

const Error = () => {
    return (
        <div>
            <Logo/>

            <Banner />
            <img src="/404.png" alt="error" />
            <p>Oops! La page que vous demandez n'existe pas.</p>
            {/* Utilisation de Link pour les redirections internes */}
            <Link to="/">Retournez à la page d'Accueil</Link>
            <Footer/>
        </div>
    );
};

export default Error;
