import Card from './Card';
import './Specials.css';

const menuItems = [
  {
    id: '1',
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.',
  },
  {
    id: '2',
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: '3',
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes stright from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function Specials(props) {
  return (
    <>
      <section className="specials">
        <div className="specials-top">
          <div className="specials-title">
            <h2>This Week's Specials</h2>
          </div>
          <div className="specials-btn">
            <button>Online Menu</button>
          </div>
        </div>

        <div className="card">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              h2={item.title}
              h3={item.price}
              p={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
