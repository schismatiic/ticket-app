import "./styles/event-card.css";
function EventCard({ title, image, description, price }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
}
export default EventCard;
