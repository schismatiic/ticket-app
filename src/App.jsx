import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import healthcheck from "./services/health";
function App() {
  const [tab, setTab] = useState("home");

  console.log("[DEBUG]: Probando Healthcheck");
  healthcheck();

  console.log("Healthcheck Ejecutado");

  return (
    <>
      <Navbar setTab={setTab}></Navbar>
    </>
  );
}

export default App;
