import { useState, useEffect } from "react";
import reservationAPI from "../services/reservations";

const api = reservationAPI();

export default function useDeleteReservation(id) {
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
  }, []);
  return { id, deleted, loading, error };
}
