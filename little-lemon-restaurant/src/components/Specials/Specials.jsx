import Card from './Card';
import './Specials.css';
import GreekSalad from '../../assets/food/greek-salad.webp';
import Bruschetta from '../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../assets/food/lemon-dessert.webp';

const menuItems = [
  {
    id: '1',
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.',
    image: GreekSalad
  },
  {
    id: '2',
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: Bruschetta
  },
  {
    id: '3',
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes stright from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: LemonDessert
  },
];

export default function Specials(props) {
  return (
    <div className="specials-wrapper">
      <section className="specials">
        <div className="specials-top">
          <div className="specials-title">
            <h2>This week's specials!</h2>
          </div>
          <div className="specials-btn">
            <button className="btn">Online Menu</button>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            {menuItems.map((item) => (
              <Card
              key={item.id}
              src={item.image}
              alt={item.title}
              h2={item.title}
              h3={item.price}
              p={item.description}
            />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
