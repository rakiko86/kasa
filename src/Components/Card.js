import "../Styles/Components/_card.scss"

function Card({ cover, title , id }) {
    return (
      <article key={id}>
        <div class="image-container">
          <img src={cover} alt={title} />
          <p>{title}</p>
        </div>
      </article>
    )
  }
  
  export default Card