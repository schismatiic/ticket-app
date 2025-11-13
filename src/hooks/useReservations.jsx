import { useState, useEffect } from "react";
import reservationAPI from "../services/reservations";

const api = reservationAPI();

export function useReservation(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //console.log(id);
  useEffect(() => {
    if (!id) {
      console.log("[DEBUG nuro] no hay una id proporcionada");
      return; //no yamamos a la api poque no hay id
    }
    const response = async () => {
      setLoading(true);
      setError(null);

      console.log("[DEBUG nuro] intentando...");
      try {
        const reservacion = await api.getByID(id);
        setData(reservacion);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    response(); //la llamamos
  }, [id]); //VIM se queja de las dependencias de data id blablabla pero si las pongo hace while true asi q no las puse funca iwal asi q eso miau

  return { id, data, loading, error };
} //get

export function useDeleteReservation(id) {
  const [deleted, setDeleted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    const response = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = api.borrar(id);
        setDeleted(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    response();
  }, [id]);
  return { id, deleted, loading, error };
}
// Reservation body
// {
//   "event_id": "68f7b9d771fbcc686dd144e8",
//   "items": [
//     {
//       "quantity": 2,
//       "type": "General"
//     }
//   ]
// }
export function usePostReservation(reservation) {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const response = async () => {
      if (!reservation) return;

      setLoading(true);
      setError(null);

      try {
        const post = await api.post(reservation);
        console.log(post);
        setData(post);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setId(data.reservation_id); //retorno el id de la reservacion recien creada
      }
    };

    response();
  }, [reservation]);
  return { id, data, loading, error };
}
