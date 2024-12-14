import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assurez-vous que ceci est bien importé

const Caroussel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    if (!pictures || pictures.length === 0) {
        return <div>Aucune image disponible.</div>; // Message si pas d'images
    }

    return (
        <div className="caroussel">
            <button onClick={prevSlide} aria-label="Image précédente">
                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            </button>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={nextSlide} aria-label="Image suivante">
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
        </div>
    );
};

export default Caroussel;