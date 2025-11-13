import { Link } from "react-router-dom";
import "./styles/searchbar.css";

function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="input-searchbar"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar"
        />
      </div>
    </div>
  );
}

export default SearchBar;

/*const eventosFiltrados = eventos.filter(e =>
  e.name.toLowerCase().includes(busqueda.toLowerCase())
);*/
