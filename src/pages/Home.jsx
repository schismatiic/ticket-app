import EventCard from "../components/EventCard";
import "./styles/home.css";
function Home() {
  return (
    <div className="event-container">
      <EventCard
        image="https://i.redd.it/3ccvjqsymii91.png"
        location="Estadio nacional - Ñuñoa"
        title="Radiohead"
        description="Kid A concert"
        date="05 de Diciembre - 07 de Diciembre"
        price="80.000"
      ></EventCard>
      <EventCard
        image="https://i.redd.it/3ccvjqsymii91.png"
        location="Estadio nacional - Ñuñoa"
        title="Radiohead"
        description="Kid A concert"
        date="05 de Diciembre - 07 de Diciembre"
        price="80.000"
      ></EventCard>
    </div>
  );
}

export default Home;
