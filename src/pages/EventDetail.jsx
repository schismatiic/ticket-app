import { useParams, useLocation, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useGlobal } from "../GlobalContext";
import "./styles/event-detail.css";

function EventDetail() {
  const { id } = useParams();
  const { state } = useLocation(); //Esta cosa es temporal, después hay que hacer llamada a API pq si el ususario recarga la pagina se pierde el evento.
  const evento = state?.evento;
  const { setGlobalID } = useGlobal();

  useEffect(() => {
    setGlobalID(id);
  }, [id, setGlobalID]);
  //tengo q hacer un use context y no lo entiendo :(
  if (!evento) return <p>No se encontró el evento.</p>;
  return (
    <div className="event-detail-container">
      <img src={evento.image} alt={evento.title} />
      <div className="event-detail-info">
        <h1>{evento.title}</h1>
        <div className="event-detail-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>map-marker</title>
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>
          <h2>{evento.location}</h2>
        </div>
        <div className="event-detail-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>text-box-multiple-outline</title>
            <path d="M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z" />
          </svg>
          <p>{evento.description}</p>
        </div>
        <div className="event-detail-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>calendar-range</title>
            <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
          </svg>
          <h2>{evento.date}</h2>
        </div>
        <div className="event-detail-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>ticket-confirmation-outline</title>
            <path d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z" />
          </svg>
          <h2>${evento.price}</h2>
        </div>
        <div className="button-container">
          <Link to={`/event-detail/${id}/reserve`}>Reservar</Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
