import { useState, useEffect } from "react";
import reservationAPI from "../services/reservations";

const api = reservationAPI();

function useReservation(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);
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
        console.log("[DEBUG data] " + data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    response(); //la llamamos
  }, []);

  return { id, data, loading, error };
} //get

export default useReservation;
