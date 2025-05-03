import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contacto" className="contact">
    <h2 className="contact__title">Contacto</h2>
    <form className="contact__form">
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Tu email" required />
      <textarea placeholder="Tu mensaje" rows="4" required></textarea>
      <button type="submit" className="btn">Enviar mensaje</button>
    </form>
  </section>
);

export default Contact;
