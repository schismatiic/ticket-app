import { useParams, useLocation} from "react-router-dom";

function EventDetail() {
    const { id } = useParams();
    const { state } = useLocation();  //Esta cosa es temporal, después hay que hacer llamada a API pq si el ususario recarga la pagina se pierde el evento.
    const evento = state?.evento; 
    if (!evento) return <p>No se encontró el evento.</p>;
    return (
        <div>
            <h1>Detalle de evento papi osiosi</h1>
            <h2>id del evento {id}</h2>
            <h2>Titulo: {evento.title}</h2>
            <h2>Ubicasao: {evento.location}</h2>
            <h2>Las descrihsione: {evento.description}</h2>
            <h2>fexa fixa: {evento.date}</h2>
            <h2>lo que le dolerá a tu billetera: {evento.price}</h2>
        </div>
    );
}

export default EventDetail;