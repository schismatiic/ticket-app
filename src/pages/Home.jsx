import EventCard from "../components/EventCard";
import "./styles/home.css";
//import { eventos } from "../services/eventosArreglo";
import { useNavigate } from "react-router-dom";
import lpr from "../assets/lpr.jpg";
import ltg from "../assets/ltg.jpg";
import { useEffect, useState, useMemo } from "react";
import { useGetEvents } from "../hooks/useEvents";

import loadingGif from "../assets/linux-tux.gif";
import HeroCarousel from "../components/HeroCarousel";

import SearchBar from "../components/SearchBar.jsx";

const images = [lpr, ltg];
function Home() {
  const { getEvents, data, isLoading, error } = useGetEvents();
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const eventos = data?.data || [];

  const eventosFiltrados = useMemo(() => {
    return eventos.filter(e =>
      e.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [eventos, busqueda]);

  useEffect(() => {
    // al montar el componente, se llama a getEvents sin parámetros
    getEvents();
  }, []);

  if (isLoading)
    return (
      <div className="status-message">
        {" "}
        <p>Cargando eventos...</p>
        <img src={loadingGif} alt="Cargando..." className="loading-gif" />
      </div>
    );
  if (error)
    return <div className="status-message">Error: {error.message}</div>;
  if (!data) return <div className="status-message">No hay datos todavía</div>;

  return (
    <div className="home-container">
      <HeroCarousel images={images} interval={5000} />
      <br></br>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>

      {busqueda ? (
        <div className="event-container">
          {eventosFiltrados.map((evento) => (
            <EventCard
              key={evento._id}
              name={evento.name}
              category={evento.category}
              date={evento.date}
              location={evento.location}
              image={evento.image}
              tickets={evento.tickets}
              onClick={() =>
                navigate(`/event-detail/${evento._id}`, { state: { evento } })
              }
            ></EventCard>
          ))}
        </div>
      ) : (
        <div className="event-container">
          {eventos.map((evento) => (
            <EventCard
              key={evento._id}
              name={evento.name}
              category={evento.category}
              date={evento.date}
              location={evento.location}
              image={evento.image}
              tickets={evento.tickets}
              onClick={() =>
                navigate(`/event-detail/${evento._id}`, { state: { evento } })
              }
            ></EventCard>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default Home;
