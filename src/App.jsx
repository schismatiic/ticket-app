import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <Navbar setTab={setTab}></Navbar>
    </>
  );
}

export default App;
