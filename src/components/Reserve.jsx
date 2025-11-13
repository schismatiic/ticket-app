import { useEffect, useState } from "react";
import { useGetbyId } from "../hooks/useEvents";
import { usePostReservation } from "../hooks/useReservations";

export default function Reserve({ id }) {
  const { get, data, isLoading, error } = useGetbyId();
  const [counters, setCounters] = useState({}); // contador por ticket
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    if (id) {
      get(id);
    }
  }, [id]);

  useEffect(() => {
    if (data?.tickets) {
      // inicializar contadores a 0 para cada ticket
      const initialCounters = {};
      data.tickets.forEach((t, index) => {
        initialCounters[index] = 0;
      });
      setCounters(initialCounters);
    }
  }, [data]);

  const increment = (index) => {
    setCounters((prev) => ({
      ...prev,
      [index]: Math.min(prev[index] + 1, data.tickets[index].available), // no superar disponible
    }));
  };

  const decrement = (index) => {
    setCounters((prev) => ({
      ...prev,
      [index]: Math.max(prev[index] - 1, 0), // no bajar de 0
    }));
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No hay datos para este evento</p>;

  return (
    <div>
      <h1>Reserva {data.name}</h1>
      <h2>Tickets disponibles:</h2>
      <div>
        {data.tickets.map((ticket, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <p>
              {ticket.type} - ${ticket.price} ({ticket.available} disponibles)
            </p>
            <button onClick={() => decrement(index)}>-</button>
            <span style={{ margin: "0 1rem" }}>{counters[index]}</span>
            <button onClick={() => increment(index)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
}
