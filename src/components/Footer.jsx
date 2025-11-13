import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Ticket App / Andrés Hernández Productions —
        Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
