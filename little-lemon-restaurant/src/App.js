import './App.css';
import CustomersSay from './components/CustomersSay/CustomersSay';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero.jsx';
import Hompage from './components/Homepage/Homepage';
import Specials from './components/Specials/Specials';
import Chicago from './components/Chicago/Chicago';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Hompage />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default App;
