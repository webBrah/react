import './Card.css';
import { Link } from 'react-router-dom';

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
            <h3 className="price">{props.h3}</h3>
          </div>
          <p>{props.p}</p>
          <Link to="/login">
            <button>Order for Delivery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
