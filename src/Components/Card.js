import React from "react";
import "../Styles/Pages/index.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ cover, title, id }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/logement/${id}`);  // Utilisez des backticks ici
    };

    return (
        <article 
            key={id} 
            onClick={handleCardClick} 
            className="card" 
            role="button" 
            tabIndex={0} 
            onKeyPress={(e) => e.id === 'Enter' && handleCardClick()}
        >
            <div className="image-container">
                <img src={cover} alt={title} />
                <p>{title}</p>
            </div>
        </article>
    );
};

export default Card;