import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { cartTotalQty, setShowCart } = useCart();

  return (
    <nav className="navbar">
      {/* Logo enlazado al home */}
      <Link to="/" className="navbar__logo">
        Bottles
      </Link>

      <ul className="navbar__links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/category/clasicas">Clásicas</NavLink></li>
        <li><NavLink to="/category/inteligentes">Inteligentes</NavLink></li>
        <li><NavLink to="/category/termica">Térmicas</NavLink></li>
      </ul>

      {/* Ícono carrito */}
      <div className="navbar__cart" onClick={() => setShowCart(true)}>
        <CartWidget count={cartTotalQty} />
      </div>
    </nav>
  );
};

export default NavBar;
