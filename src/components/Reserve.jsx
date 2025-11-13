import { useEffect, useState } from "react";
import { useGetbyId } from "../hooks/useEvents";
import { usePostReservation } from "../hooks/useReservations";
import "./styles/reserve.css";
export default function Reserve({ id }) {
  const { get, data, isLoading, error } = useGetbyId();
  const {
    postReservation,
    loading: postLoading,
    error: postError,
  } = usePostReservation();
  const [counters, setCounters] = useState({});

  // 🔹 Cargar evento por ID
  useEffect(() => {
    if (id) get(id);
  }, [id]);

  // 🔹 Inicializar contadores una vez cargados los tickets
  useEffect(() => {
    if (data?.tickets) {
      const initialCounters = {};
      data.tickets.forEach((_, i) => (initialCounters[i] = 0));
      setCounters(initialCounters);
    }
  }, [data]);

  const handleReserve = async () => {
    const selected = data.tickets
      .map((t, i) => ({
        type: t.type,
        quantity: counters[i],
      }))
      .filter((t) => t.quantity > 0);

    if (selected.length === 0) {
      alert("Selecciona al menos un ticket antes de reservar.");
      return;
    }

    const newReservation = {
      event_id: data._id,
      items: selected,
    };

    console.log("[DEBUG]: Reserva a enviar:", newReservation);

    try {
      const result = await postReservation(newReservation);
      console.log("[DEBUG]: Resultado del POST:", result);
      alert("Reserva creada correctamente");
    } catch (err) {
      alert("Error al crear la reserva");
    }
  };

  if (isLoading) return <p>Cargando evento...</p>;
  if (error) return <p>Error al cargar evento: {error.message}</p>;
  if (!data) return <p>No se encontraron datos del evento.</p>;

  return (
    <div className="reserva-container">
      <h1>{data.name}</h1>
      <img src={data.image} />
      {data.tickets.map((ticket, i) => (
        <div key={i}>
          <p>
            {ticket.type} - ${ticket.price} ({ticket.available} disponibles)
          </p>
          <button
            className="button-minusplus"
            onClick={() =>
              setCounters((prev) => ({
                ...prev,
                [i]: Math.max(prev[i] - 1, 0),
              }))
            }
          >
            -
          </button>
          <span style={{ margin: "0 10px" }}>{counters[i]}</span>
          <button
            className="button-minusplus"
            onClick={() =>
              setCounters((prev) => ({
                ...prev,
                [i]: Math.min(prev[i] + 1, ticket.available),
              }))
            }
          >
            +
          </button>
        </div>
      ))}
      <button
        className="button-reserva"
        onClick={handleReserve}
        disabled={postLoading}
      >
        {postLoading ? "Enviando..." : "Confirmar reserva"}
      </button>
      {postError && <p style={{ color: "red" }}>Error: {postError.message}</p>}
    </div>
  );
}
