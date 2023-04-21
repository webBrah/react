import Card from './Card';
import './Specials.css';

export default function Specials(props) {
  return (
    <>
      <section className="specials">
        <div className="specials-top">
          <div className="specials-title">
            <h2>This Weeks's Specials</h2>
          </div>
          <div className="specials-btn">
            <button>Online Menu</button>
          </div>
        </div>

        <div className="card">
          <Card
            h2="Item Title"
            h3="$19.99"
            p="This is just some text passed via props"
          />
          <Card
            h2="Item Title"
            h3="$19.99"
            p="This is just some text passed via props"
          />
          <Card
            h2="Item Title"
            h3="$19.99"
            p="This is just some text passed via props"
          />
        </div>
      </section>
    </>
  );
}

// need to create CSS file
