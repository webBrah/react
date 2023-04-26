import React from 'react';
import './Card.css';
import starImage from '../../assets/star.png';

function Card(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="image-wrapper">
          <img src={starImage} alt={props.name}/>
        </div>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  );
}

export default Card;