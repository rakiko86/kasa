import React from "react";
import { useParams } from "react-router-dom";
import logements from "../assets/logements/loge.json"; // Assure-toi que ce fichier est dans /src/Data
import Error from "./Error";
import Collapse from "../Components/Collapse";
import Caroussel from "../Components/Caroussel";

const Page = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }


return (
    <div className="details-page">
        <Caroussel/>
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <img src={logement.cover} alt={logement.title} />
        <Collapse/>
        <p>{logement.description}</p>
        <ul>
        <Collapse/>
            {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    </div>
);


   };


export default Page;
