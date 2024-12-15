import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
    // Générer un tableau d'étoiles
    const maxStars = 5; // Nombre total d'étoiles
    const stars = Array.from({ length: maxStars }, (_, index) => {
        if (index < Math.floor(rating)) {
            return <FontAwesomeIcon key={index} icon={faStar} className="star full" />; // Étoile pleine
        } else if (index < rating) {
            return <FontAwesomeIcon key={index} icon={faStarHalfAlt} className="star half" />; // Étoile demi-pleine
        } else {
            return <FontAwesomeIcon key={index} icon={faStarEmpty} className="star empty" />; // Étoile vide
        }
    });

    return <div className="rating">{stars}</div>;
};

export default Rating;
