import EventCard from "../components/EventCard";
import "./styles/home.css";
function Home() {
  return (
    <div className="event-container">
      <EventCard
        title="Radiohead"
        image="https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
        description="Kid A concert"
        price="80"
      ></EventCard>{" "}
      <EventCard
        title="Radiohead"
        image="https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
        description="Kid A concert"
        price="80"
      ></EventCard>{" "}
      <EventCard
        title="Radiohead"
        image="https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
        description="Kid A concert"
        price="80"
      ></EventCard>{" "}
      <EventCard
        title="Radiohead"
        image="https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
        description="Kid A concert"
        price="80"
      ></EventCard>
    </div>
  );
}

export default Home;
