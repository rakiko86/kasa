import React, { useState } from "react";
import Collapse from './Collapse';
import "../Styles/Components/_card.scss";


const Card = ({ logement }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ul className="card">
            <Collapse>
                <li>Description {logement.description}</li>
                <li>Équipements : {logement.equipments.join(', ')}</li>
            </Collapse>
        </ul>
    );
};

export default Card;
