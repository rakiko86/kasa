import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/Pages/index.scss";

const Error = () => {
    return (
        <div>
            <Header />

            <img className="error-img" src="/404.png" alt="error" />
            <div className="error">
                <span>Oups! La page que vous demandez n'existe pas.</span> <br />
                <Link to="/">Retournez à la page d'Accueil </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Error;
