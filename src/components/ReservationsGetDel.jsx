import { useState, useEffect, useContext } from "react";
import { useReservation, useDeleteReservation } from "../hooks/useReservations";
import "./styles/reservations-getdel.css";
//componente en pagina de reservaciones para ver y cancelar reservaciones con un botoncito
export default function ReservationsGetDel() {
  const [input, setInput] = useState("");
  const [id, setID] = useState("");
  const [del, setDel] = useState(""); //siento q hacer esto es muy chancho pero funcara

  const handleGet = () => {
    setID(input);
    console.log(id);
  };
  const cancelReservation = () => {
    setDel(id);
  };
  const { getId, data, loading, error } = useReservation(id);
  const { delId, delData, delLoading, delError } = useDeleteReservation(del);

  // Leo dios del css arregla esta wea toda fea
  return (
    <div className="reservas">
      <div className="input-container">
        <input
          className="input-principal"
          placeholder="ID de reserva"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="button-reservar" onClick={handleGet}>
          Revisar
        </button>
      </div>
      {!data && id === "" && <p>Ingrese un ID de reservacion</p>}
      {loading && id !== "" && <p>Cargando...</p>}
      {error && <p>Error al cargar reserva</p>}
      {data && (
        <div className="Render-reservas">
          <div>
            <h3>Reserva encontrada:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <button className="button Borrar" onClick={cancelReservation}>
            Cancelar Reserva
          </button>
        </div>
      )}
      {del !== "" && delLoading && <p>Cancelando...</p>}
      {delError && <p>Error al cancelar reserva, intente de nuevo.</p>}
      {delData && <p>Reserva {delId} cancelada.</p>}
    </div>
  );
}
