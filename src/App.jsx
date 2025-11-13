import { useState, useEffect } from "react";
// ============= Lo siguiente solo se utiliza para el Navbar =============
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Reservations from "./pages/Reservations";
import EventDetail from "./pages/EventDetail";
import ReserveEvent from "./pages/ReserveEvent";
// =======================================================================
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  // Aplica o quita el modo claro en el body
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]);
  return (
    <BrowserRouter>
      <Navbar />
      <button
        onClick={() => setLightMode(!lightMode)}
        className="theme-toggle-btn"
      >
        {lightMode ? "🌙" : "☀️"}
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
        <Route path="/event-detail/:id/reserve" element={<ReserveEvent />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
