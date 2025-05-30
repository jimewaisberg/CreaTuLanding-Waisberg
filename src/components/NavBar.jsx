import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = ({ count, onCartClick }) => (
  <nav className="navbar">
    <div className="navbar__logo">Bottles</div>

    <ul className="navbar__links">
      <li><NavLink to="/">Inicio</NavLink></li>
      <li><NavLink to="/category/clasicas">Clásicas</NavLink></li>
      <li><NavLink to="/category/inteligentes">Inteligentes</NavLink></li>
      <li><NavLink to="/category/termica">Térmicas</NavLink></li>
    </ul>

    {/* Ícono de carrito */}
    <div className="navbar__cart" style={{ marginLeft: "auto" }} onClick={onCartClick}>
      <CartWidget count={count} />
    </div>
  </nav>
);

export default NavBar;
