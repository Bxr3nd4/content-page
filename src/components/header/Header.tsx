import { Link } from "react-router-dom";
import "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/terminal">Linea de Comandos</Link>
          </li>
          <li>
            <Link to="/git">Git</Link>
          </li>
          <li>
            <Link to="/github">Github</Link>
          </li>
          <li>
            <Link to="/internet">Internet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
