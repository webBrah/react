import Card from './Card';
import './CustomersSay.css';

const testimonials = [
  {
    id: '1',
    name: 'John Doe',
    review:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.',
  },
  {
    id: '2',
    name: 'Jane Smith',
    review:
      'The bruschetta was absolutely delicious, with the perfect amount of garlic and olive oil.',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    review:
      "I couldn't resist trying the lemon dessert, and it was just as authentic as promised. Highly recommended!",
  },
  {
    id: '4',
    name: 'Sarah Lee',
    review:
      'The Greek salad was a delight to my taste buds. The feta cheese was definitely the star of the dish!',
  },
];

export default function CustomersSay() {
  return (
    <>
      <h2 className='title-testimonials'>Testimonials</h2>
      <div className="card">
        {testimonials.map((item) => (
          <Card key={item.id} h3={item.name} p={item.review} />
        ))}
      </div>
    </>
  );
}
