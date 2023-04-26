import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import CustomersSay from '../CustomersSay/CustomersSay';
import Chicago from '../Chicago/Chicago';

export default function Homepage() {
  return (
    <main>
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}
