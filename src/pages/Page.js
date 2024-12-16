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
import "../Styles/Pages/index.scss";
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
        <section className="info">
          <div className="titleLocation">
          <h2>{logement.title}</h2>
          <span>{logement.location}</span>
          </div>
          <div className="rateHost">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
          </div>
          </section>
          <Tag className="pageTag" logement={logement} />
       
        <section className="collapsePage">
          <ul className="ulCollapse">
            <li>
              <Collapse title="Description">{logement.description}</Collapse>
            </li>
            <li>
              <Collapse title="Équipements">
                <ul className="ulEquipement">
                  {logement.equipments.map((equipment, index) => (
                    <li className="liEquipement" key={index}>{equipment}</li>
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
