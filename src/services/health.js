const api = import.meta.env.VITE_API_URL;

async function healthcheck() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      console.log("[DEBUG] ERROR");
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.text();
    console.log("healthcheck aaaa", result);
    return result;
  } catch (err) {
    console.log("[DEBUG]: health.js error en healthcheck");
    console.error(err.message);
    return err;
  }
}

export default healthcheck;
