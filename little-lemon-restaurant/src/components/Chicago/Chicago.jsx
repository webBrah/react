import './Chicago.css';

export default function Chicago() {
  return (
    <section className='chicago-wrapper'>
      <div className="chicago">
        <div className="chicago-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p className="subsection">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>
        <div className="chicago-images">
          <img
            src={require('../../assets/food/food3.jpeg')}
            alt="Little Lemon restaurant cuisine"
            className="chicago-image image-adrian"
          ></img>
          <img
            src={require('../../assets/food/food3.jpeg')}
            alt="Little Lemon restaurant cuisine"
            className="chicago-image image-nick"
          ></img>
        </div>
      </div>
    </section>
  );
}

