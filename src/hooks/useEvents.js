import { useEffect, useState } from "react";
import eventApi from "../services/events";
const api = eventApi();

// Vale este archivo deberia tener casi todo para que funque, si no lo tiene me avisan
// Notaran que cada Hook tiene tanto su data, que retorna la respuesta que da el hook, no su accion
// Tiene loading y error, que son fundamentales para tratar con los componentes que interactuan
// AHora intentare ver que explicar de los hooks

export function useGetbyId() {
  console.log("[DEBUG]: Ejecutando useGetbyId");

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Declaramos una funcion asincrona para ser retornada y sacarla de la funcion
  async function get(id) {
    if (!id) {
      return;
    }
    setLoading(true);
    //
    try {
      // Aca llamamos la capa de servicios, todo el resto es mero tratado de funciones asincronas
      const dato = await api.getbyId(id);
      setData(dato);
    } catch (err) {
      console.log("[DEBUG]: Error en useGetbyId()");
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  //
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
    //
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
export function useGetEvents() {
  console.log("[DEBU]: Ejecutando useGetEvents");
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getEvents(params) {
    console.log("[DEBUG]: Iniciando getEvents");
    setLoading(true);

    //
    try {
      const dato = await api.getEvents(params);
      setData(dato);
    } catch (err) {
      console.log("[DEBUG]: Error en useGetEvents, de useEvents.js");
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  //
  return { getEvents, data, isLoading, error };
}
