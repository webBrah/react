import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
     </div>
    </div>
  );
}

export default Card;