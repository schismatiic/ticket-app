import EventCard from "../components/EventCard";
import "./styles/home.css";
//import { eventos } from "../services/eventosArreglo";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useGetEvents } from "../hooks/useEvents"; 

function Home() {
  const { getEvents, data, isLoading, error } = useGetEvents();
  const navigate = useNavigate();

  useEffect(() => {
    // al montar el componente, se llama a getEvents sin parámetros
    getEvents();
  }, []);

  if (isLoading) return <p>Cargando eventos...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No hay datos todavía</p>;

  const eventos = data.data;

  return (
    <div className="event-container">
      {eventos.map(evento => (
        <EventCard key={evento._id}
          name={evento.name} 
          category={evento.category}
          date={evento.date}   
          location={evento.location} 
          image={evento.image} 
          tickets={evento.tickets}
          onClick={() => navigate(`/event-detail/${evento._id}`, { state: {evento} })}
        ></EventCard>
      ))}
    </div>
  );
}

export default Home;
