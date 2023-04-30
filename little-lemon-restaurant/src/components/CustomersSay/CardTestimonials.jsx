import React from 'react';
import './CardTestimonials.css';

function CardTestimonials(props) {
  return (
    <div className="card-testimonials">
      <div className="image-wrapper">
        <img className="testimonial-image" src={props.image} alt={props.name} /> {/* Use the image prop here */}
      </div>
      <div className="text-wrapper">
        <h3 className="testimonials-title">{props.name}</h3>
        <p className="testimonials-text">{props.review}</p>
      </div>
    </div>
  );
}

export default CardTestimonials;
