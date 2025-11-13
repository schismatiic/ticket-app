import "./styles/event-card.css";
import { Link } from "react-router-dom";
//image, location, title, date, price, onClick
function EventCard({
  name,
  category,
  date,
  location,
  image,
  tickets,
  onClick,
}) {
  const hayDisponibles = tickets?.some((ticket) => ticket.available > 0);
  const fechaFormateada = new Date(date).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="event-card" onClick={onClick}>
      <img src={image} alt={name} />
      <div className="event-card__info">
        <h3>{name}</h3>
        <div className="card-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>map-marker</title>
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>
          <h6>{location}</h6>
        </div>
        <div className="card-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>calendar-range</title>
            <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
          </svg>
          <p>{fechaFormateada}</p>
        </div>
        <div className="card-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>ticket-confirmation-outline</title>
            <path d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z" />
          </svg>

          <p className="event-card-stock">
            Stock: <span>{hayDisponibles ? "Disponible" : "Agotado"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default EventCard;
