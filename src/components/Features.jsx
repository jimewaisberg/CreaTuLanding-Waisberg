import React from 'react';
import './Features.css';

const features = [
  {
    title: 'Sensor de Temperatura',
    desc: 'Sensor de alta precisión que muestra la temperatura en tiempo real.',
  },
  {
    title: 'Hasta 24h de Batería',
    desc: 'Batería de larga duración para uso continuo durante todo el día.',
  },
  {
    title: 'Acero Inoxidable',
    desc: 'Construcción duradera, libre de BPA y resistente a golpes.',
  },
  {
    title: 'Bluetooth Integrado',
    desc: 'Sincroniza con tu móvil para registrar hábitos de hidratación.',
  },
];

const Features = () => (
  <section id="caracteristicas" className="features">
    <h2 className="features__title">Características</h2>
    <div className="features__grid">
      {features.map((f, idx) => (
        <div key={idx} className="features__item fade-in">
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
