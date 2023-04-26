import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Order from './Pages/Order';
import Login from "./Pages/Login";
import Confirmation from "./Pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/menu" element={<Menu />} />

      <Route path="/reservations" element={<Reservations />} />

      <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />

        <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
