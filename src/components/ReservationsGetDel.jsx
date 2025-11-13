import { useState, useEffect, useContext } from "react";
import { useReservation, useDeleteReservation } from "../hooks/useReservations";

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

  // Leo dios del css arregla esta wea toda fea
  return (
    <div className="Reservas">
      <input
        className="input"
        placeholder="ID de reserva"
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="button" onClick={handleGet}>
        Revisar
      </button>
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
    </div>
  );
}
