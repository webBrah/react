import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="image-wrapper">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="card-content">
          <div className="title-row">
            <h2>{props.h2}</h2>
            <h3 class="price">{props.h3}</h3>
          </div>
          <p>{props.p}</p>
          <button>Order for Delivery</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
