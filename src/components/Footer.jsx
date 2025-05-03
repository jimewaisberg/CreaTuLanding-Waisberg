import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Bottles. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
