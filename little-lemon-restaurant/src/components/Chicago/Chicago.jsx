import './Chicago.css';

export default function Chicago() {
  return (
    <>
      <section className="chicago">
        <div className="chicago-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="subsection">Nick and Adrian blah blah blah...</p>
          <br></br>
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
      </section>
    </>
  );
}
