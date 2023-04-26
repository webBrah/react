import Card from './Card';
import './CustomersSay.css';

const testimonials = [
  {
    id: '1',
    image: '../../assets/star.png',
    name: 'John Doe',
    review:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.',
  },
  {
    id: '2',
    image: '../../assets/star.png',
    name: 'Jane Smith',
    review:
      'The bruschetta was absolutely delicious, with the perfect amount of garlic and olive oil.',
  },
  {
    id: '3',
    image: '../../assets/star.png',
    name: 'Mike Johnson',
    review:
      "I couldn't resist trying the lemon dessert, and it was just as authentic as promised. Highly recommended!",
  },
  {
    id: '4',
    image: '../../assets/star.png',
    name: 'Sarah Lee',
    review:
      'The Greek salad was a delight to my taste buds. The feta cheese was definitely the star of the dish!',
  },
];

export default function CustomersSay() {
  return (
    <section className='testimonials-wrapper'>
      <h2 className='title-testimonials'>Testimonials</h2>
      <div className="card-wrapper">
        {testimonials.map((item) => (
          <Card
            key={item.id}
            h3={item.name}
            p={item.review}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
