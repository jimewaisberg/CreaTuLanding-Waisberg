import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = ({ count, onCartClick, onClearSelection }) => (
  <nav className="navbar fade-in">
    <div className="navbar__logo">Bottles</div>
    <ul className="navbar__links">
      <li>
        <a
          href="#inicio"
          onClick={e => {
            e.preventDefault();
            onClearSelection();
            window.location.hash = 'inicio';
          }}
        >
          Inicio
        </a>
      </li>
      <li>
        <a
          href="#productos"
          onClick={e => {
            e.preventDefault();
            onClearSelection();
            window.location.hash = 'productos';
          }}
        >
          Productos
        </a>
      </li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <div className="navbar__cart" onClick={onCartClick}>
      <CartWidget count={count} />
    </div>
  </nav>
);

export default NavBar;
