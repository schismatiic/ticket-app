import { useState, useEffect } from "react";
import { useGetbyId } from "../hooks/useEvents";
export default function Reserve({ id }) {
  const { get, data, isLoading, error } = useGetbyId();

  useEffect(() => {
    if (id) {
      get(id);
    }
  }, [id]);

  // Expected body of event
  // {
  //   "_id": "string",
  //   "name": "string",
  //   "category": "string",
  //   "date": "2025-11-13T03:04:23.217Z",
  //   "location": "string",
  //   "image": "string",
  //   "tickets": [
  //     {
  //       "type": "string",
  //       "price": 0,
  //       "available": 0
  //     }
  //   ]
  // }
  return (
    <div>
      <h1>Reserva {id}</h1>
    </div>
  );
}
