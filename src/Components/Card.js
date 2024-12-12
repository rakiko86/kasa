import React from "react";
import "../Styles/Components/_card.scss";

const Card = ({ cover, title, id }) => (
  <article key={id}>
    <div class="image-container">
      <img src={cover} alt={title} />
      <p>{title}</p>
    </div>
  </article>
);

export default Card;