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
            <div class="error">
  <span class="error-text">
    <span class="line1">Oups! La page que</span>
    <span class="line2"> vous demandez n'existe pas.</span>
  </span>
</div>

                <Link to="/">Retournez à la page d'Accueil </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Error;
