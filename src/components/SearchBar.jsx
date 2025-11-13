import { Link } from "react-router-dom";
import "./styles/navbar.css";

function SearchBar({busqueda, setBusqueda}) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="button-container">
          <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Escribe aquí..." />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

/*const eventosFiltrados = eventos.filter(e =>
  e.name.toLowerCase().includes(busqueda.toLowerCase())
);*/