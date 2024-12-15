// import React from "react";
import { useParams } from "react-router-dom";
import logements from "../assets/data/loge.json";
import Error from "./Error";
import Collapse from "../Components/Collapse";
import Caroussel from "../Components/Caroussel";
import Tag from "../Components/Tag";

const Page = () => {
    const { id } = useParams();
    console.log("ID récupéré : ", id);

    const logement = logements.find((logement) => logement.id === String(id));
    console.log("Logement trouvé : ", logement);

    if (!logement) {
        return <Error />;
    }

    return (
        <div className="details-page">
            <Caroussel images={logement.pictures} />
            <Tag tags={logement.tags} />
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            
            <Collapse title="Description">
                <p>{logement.description}</p>
            </Collapse>

            <Collapse title="Équipements">
                <ul>
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    );
};

export default Page;