import { useEffect, useState } from "react";
import eventApi from "../services/events";
const api = eventApi();

export function useGetbyId(id) {
  console.log("[DEBUG]: Ejecutando useGetbyId");

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function get(id) {
    if (!id) {
      return;
    }
    setLoading(true);
    try {
      const dato = await api.getbyId(id);
      setData(dato);
    } catch (err) {
      console.log("[DEBUG]: Error en useGetbyId()");
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { get, data, isLoading, error };
}

export function useDelete() {
  console.log("[DEBUG]: Ejecutando useDelete");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function borrar(id) {
    if (!id) return;
    setLoading(true);
    try {
      const dato = await api.borra(id);
      setData(dato);
    } catch (err) {
      console.log("[DEBUG]: Error en useDelete");
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { borrar, data, isLoading, error };
}

// export function useDelete() {
//   console//
