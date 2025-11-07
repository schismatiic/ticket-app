const api = import.meta.env.VITE_API_URL;

async function postReservation(newReservation) {
  try {
    const response = await fetch(api + "/Reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReservation),
    });
    if (!response.ok) {
      throw new Error(
        "Error en post de reservacion. Status: ${response.status}",
      );
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: error en postReservation() de reservations.js"); //Estoy haciendo los errores lo mas parecidos a los del benja para tener consistencia nya
    console.error(err.message);
    return err;
  }
}

async function getReservation(id) {
  try {
    const response = await fetch(api + `/Reservations/${id}`);
    if (!response.ok) {
      throw new Error(
        `Error en get de reservacion. Status: ${response.status}`,
      );
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: error en getReservation() de reservations.js");
    console.error(err.message);
    return err;
  }
}

async function deleteReservation(id) {
  try {
    const response = await fetch(api + `/Reservations/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(
        `Error en delete de reservacion . Status: ${response.status}`,
      );
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: error en deleteReservation() de reservations.js");
    console.error(err.message);
    return err;
  }
}
