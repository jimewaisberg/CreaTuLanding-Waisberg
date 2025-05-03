import React from 'react';
import './ItemListContainer.css';
import prod1 from '../assets/producto.jpg';
import prod2 from '../assets/producto2.png';
import prod3 from '../assets/producto3.webp';
import prod4 from '../assets/producto4.jpg';
import prod5 from '../assets/producto5.jpg';
import prod6 from '../assets/producto6.jpg';

const products = [
  {
    id: 1,
    name: 'Botella Inteligente',
    price: '$79.99',
    image: prod1,
    description:
      'La Botella Inteligente te muestra la temperatura y te recuerda hidratarte.',
  },
  {
    id: 2,
    name: 'Botella Verde',
    price: '$74.99',
    image: prod2,
    description:
      'Acero inoxidable color verde oliva, sensor digital y tapa hermética.',
  },
  {
    id: 3,
    name: 'Termo Stanley',
    price: '$69.99',
    image: prod3,
    description:
      'Clásico termo Stanley de gran capacidad, mantiene la temperatura por horas.',
  },
  {
    id: 4,
    name: 'Botella Roja',
    price: '$79.99',
    image: prod4,
    description:
      'Rojo brillante con empuñadura ergonómica y pantalla LED táctil.',
  },
  {
    id: 5,
    name: 'Botella Azul',
    price: '$79.99',
    image: prod5,
    description:
      'Azul marino mate, resistente a golpes y con Bluetooth para app móvil.',
  },
  {
    id: 6,
    name: 'Botella Gris',
    price: '$89.99',
    image: prod6,
    description:
      'Gris titanio, edición premium, compatible con soporte de bici y mochila.',
  },
];

const ProductCard = ({ product, onView }) => (
  <div className="product-card fade-in">
    <img
      className="product-card__image"
      src={product.image}
      alt={product.name}
    />
    <h3 className="product-card__name">{product.name}</h3>
    <p className="product-card__price">{product.price}</p>
    <button className="product-card__button" onClick={() => onView(product)}>
      Ver detalles
    </button>
  </div>
);

const ProductDetail = ({ product, onAddToCart, onBack }) => {
  const [anim, setAnim] = React.useState(false);
  const handleAdd = () => {
    setAnim(true);
    onAddToCart(product);
    setTimeout(() => setAnim(false), 300);
  };
  return (
    <section className="product-detail fade-in">
      <button className="back-button" onClick={onBack}>
        ← Volver
      </button>
      <div className="product-detail__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail__info">
        <h2 className="product-detail__name">{product.name}</h2>
        <p className="product-detail__desc">{product.description}</p>
        <p className="product-detail__price">{product.price}</p>
        <button className={`btn-add ${anim ? 'animate' : ''}`} onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </section>
  );
};

const ItemListContainer = ({ greeting, addToCart, selected, onView }) => {
  if (selected) {
    return (
      <ProductDetail
        product={selected}
        onAddToCart={addToCart}
        onBack={() => onView(null)}
      />
    );
  }

  return (
    <section id="productos" className="products-section">
      <h2 className="section-title">{greeting}</h2>
      <div className="products-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onView={onView} />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
