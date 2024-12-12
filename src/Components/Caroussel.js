import React, { useState } from 'react';

const Caroussel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Fonction pour passer à l'image précédente
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="caroussel">
            <button onClick={prevSlide}><FontAwesomeIcon icon="fa-solid fa-angle-left" /></button>
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={nextSlide}><FontAwesomeIcon icon="fa-solid fa-chevron-right" /> </button>
        </div>
    );
};

export default Caroussel;
