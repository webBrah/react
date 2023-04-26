import React from 'react';
import './Hero.css';
import restaurantFood from '../../assets/food/restauranfood.jpg';

export default function Hero() {
  return (
    <div className="hero-background">
      <div className="hero-wrapper">
        <article className="call-to-action">
          <section className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="subsection">
              We are a family owned Mediterranean restaurant, located on Maldove
              Street in Chicago, Illinois. We focus on traditional recipes served
              with a modern twist.
            </p>
            <br></br>
            {/* <Link className="action-button" to="/reservations">Reserve a table</Link> */}
            <button className='reserve-a-table'>Reserve a table</button>
          </section>

          <section className="hero-image">
            <img
              src={restaurantFood}
              alt="Little Lemon restaurant cuisine"
              className="hero-image-content"
            />
          </section>
        </article>
      </div>
    </div>
  );
}
