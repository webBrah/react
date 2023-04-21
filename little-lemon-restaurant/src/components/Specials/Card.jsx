import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
        <button>Order for Delivery</button>
      </div>
    </div>
  );
}

export default Card;
