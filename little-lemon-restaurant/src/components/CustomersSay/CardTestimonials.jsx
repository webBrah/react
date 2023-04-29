import React from 'react';
import './CardTestimonials.css';
import starImage from '../../assets/star.png';

function CardTestimonials(props) {
  return (
    <div className="card-testimonials">
      <div className="image-wrapper">
        <img className="star-image" src={starImage} alt={props.name} />
      </div>
      <div className="text-wrapper">
        <h3 className="testimonials-title">{props.name}</h3>
        <p className="testimonials-text">{props.review}</p>
      </div>
    </div>
  );
}

export default CardTestimonials;
