import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import healthcheck from "./services/health";
import eventApi from "./services/events";
const eventsApi = eventApi();
function App() {
  const [tab, setTab] = useState("home");
  return (
    <>
      <Navbar setTab={setTab}></Navbar>
    </>
  );
}

export default App;
