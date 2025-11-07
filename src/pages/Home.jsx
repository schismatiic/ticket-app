import EventCard from "../components/EventCard";
import "./styles/home.css";
import { eventos } from "../services/eventosArreglo";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="event-container">
      {eventos.map(evento => (
        <EventCard key={evento.id}
          image={evento.image}  
          location={evento.location} 
          title={evento.title} 
          description={evento.description} 
          date={evento.date} 
          price={evento.price} 
          onClick={() => navigate(`/event-detail/${evento.id}`, { state: {evento} })}
        ></EventCard>
      ))}
    </div>
  );
}

export default Home;
