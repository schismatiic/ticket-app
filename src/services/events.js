const api = import.meta.env.VITE_API_URL;

async function getEventbyId(id) {
  try {
    const response = await fetch(api + `/events/${id}`);
    if (!response.ok) {
      throw new Error(`Response Status ${response.status}`);
    }
    const result = await response.json();
    console.log("[DEBUG]: Respuesta de getEventbyId en events.js ", result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en getEventbyId, en event.js");
    console.error(err.message);
    return err;
  }
}
async function borra(id) {
  try {
    const response = await fetch(api + `/events/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Status borra ${response.status}`);
    }
    const result = await response.text();
    console.log(result);
  } catch (err) {
    console.log("[DEBUG]: Error en borrar, en eventjs");
    console.error(err.message);
    return err;
  }
}

async function post(newEvent) {
  try {
    const response = await fetch(api + `/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    if (!response.ok) {
      throw new Error(`Error en post. Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en post, de event.js");
    console.error(err.message);
    return err;
  }
}
async function patch(id, parche) {
  try {
    const response = await fetch(api + `/events/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parche),
    });
    if (!response.ok) {
      throw new Error(`Error en path. Status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: Error en post, en event.js");
    console.error(err.message);
    return err;
  }
}

function eventApi() {
  return {
    getbyId: (id) => getEventbyId(id),
    borra: (id) => borra(id),
    post: (evento) => post(evento),
    patch: (id, parche) => patch(id, parche),
  };
}
export default eventApi;
