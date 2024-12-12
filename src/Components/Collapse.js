import React, { useState } from "react";
import "../Styles/Components/_collapse.scss";

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
            <div className="collapse-header" onClick={toggle}>
                <h2>{title}</h2>
                <span className={`collapse-icon ${isOpen ? "open" : ""}`}>
                    {isOpen ? "▲" : "▼"} {/* Vous pouvez remplacer par des icônes ou des images */}
                </span>
            </div>

            {/* Contenu conditionnel */}
            {isOpen && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse;