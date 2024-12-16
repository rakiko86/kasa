import React from "react";
import { useParams } from "react-router-dom";
import logements from "../assets/data/loge.json";
import Error from "./Error";
import Collapse from "../Components/Collapse";
import Caroussel from "../Components/Caroussel"; 
import Tag from "../Components/Tag";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Host from "../Components/Host";
import Rating from "../Components/Rating";
const Page = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === String(id));

  if (!logement) {
    return <Error />;
  }
  return (
    <div className="details-page">
      <Header />
      <article className="pageArticle">
        <Caroussel logementId={logement.id} />
        <section>
          <h2>{logement.title}</h2>
          <span>{logement.location}</span>
          <Tag logement={logement} />
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </section>
        <section>
          <ul>
            <li>
              <Collapse title="Description">{logement.description}</Collapse>
            </li>
            <li>
              <Collapse title="Équipements">
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Collapse>
            </li>
          </ul>
        </section>
        </article>
      <Footer />
    </div>
  );
};

export default Page;
