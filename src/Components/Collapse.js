import React, { useState } from "react";
import "../Styles/Pages/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, children }) => {
    // État pour gérer l'ouverture/fermeture
    const [isOpen, setIsOpen] = useState(false);

    // Fonction de bascule
    const toggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="collapse">
            {/* Barre du collapse avec le titre et la logique pour ouvrir/fermer */}
            <div
                className="collapse-header"
                onClick={toggle}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`collapse-content-${title}`}
            >
                <div>
                <h2>{title}</h2>
                <span className={`collapse-icon ${isOpen ? "open" : ""}`}>
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
                </span>
            </div>
            </div>
            {/* Contenu conditionnel */}
            {isOpen && (
                <div className="collapse-content" id={`collapse-content-${title}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse;
