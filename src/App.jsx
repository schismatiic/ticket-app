import { useState, useEffect } from "react";
// ============= Lo siguiente solo se utiliza para el Navbar =============
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import EventDetail from "./pages/EventDetail";
// =======================================================================
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
