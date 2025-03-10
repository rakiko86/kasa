import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import logements from "../assets/data/loge.json";
import "../Styles/Pages/index.scss";

const Caroussel = ({ logementId }) => {
    const logement = logements.find((logement) => logement.id === logementId);
    const pictures = logement?.pictures || [];
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

    if (pictures.length === 0) {
        return <div>Aucune image disponible pour ce logement.</div>;
    }

    return (
        <div className="caroussel">
            {pictures.length > 1 && (
                <button
                    onClick={prevSlide}
                    aria-label="Image précédente"
                    className="caroussel-button"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}
            <div className="caroussel-image-container">
                <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                {pictures.length > 1 && (
                    <div className="caroussel-counter">
                        {currentIndex + 1} / {pictures.length}
                    </div>
                )}
            </div>
            {pictures.length > 1 && (
                <button
                    onClick={nextSlide}
                    aria-label="Image suivante"
                    className="caroussel-button"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    );
};

export default Caroussel;
