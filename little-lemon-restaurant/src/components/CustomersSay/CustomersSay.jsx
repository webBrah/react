import CardTestimonials from './CardTestimonials';
import './CustomersSay.css';

const testimonials = [
  {
    id: '1',
    image: '../../assets/testimonials-1.jpg',
    name: 'John Doe',
    review:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutions.',
  },
  {
    id: '2',
    image: '../../assets/testimonials-2.jpg',
    name: 'Jane Smith',
    review:
      'The bruschetta was absolutely delicious, with the perfect amount of garlic and olive oil.',
  },
  {
    id: '3',
    image: '../../assets/testimonials-3.jpg',
    name: 'Mike Johnson',
    review:
      "I couldn't resist trying the lemon dessert, and it was just as authentic as promised. Highly recommended!",
  },
];

export default function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div className='testimonials-title'>
        <h2 className="title-testimonials">Testimonials</h2>
        </div>
        <div className="testimonials-card-wrapper">
          {testimonials.map((item) => (
            <CardTestimonials
              key={item.id}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
