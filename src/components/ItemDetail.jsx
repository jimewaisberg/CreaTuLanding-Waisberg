import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  /* Hooks SIEMPRE se llaman primero */
  const { addToCart } = useCart();
  const [units, setUnits] = useState(1);
  const [added, setAdded] = useState(false);

  /* Fallbacks si algún campo falta */
  const {
    name = "Sin nombre",
    image = "",
    description = "Sin descripción disponible",
    price = "—",
    stock = 10,
  } = product || {}; // product llega definido desde el container

  const handleAdd = () => {
    addToCart(product, units);
    setAdded(true);
  };

  return (
    <section className="pd-container">
      <figure className="pd-image">
        <img src={image} alt={name} />
      </figure>

      <div className="pd-info">
        <h1 className="pd-name">{name}</h1>
        <p className="pd-desc">{description}</p>

        <div className="pd-buy">
          <span className="pd-price">${price}</span>

          {!added ? (
            <>
              <ItemCount stock={stock} initial={1} onChange={setUnits} />
              <button className="btn-primary" onClick={handleAdd}>
                Agregar al carrito
              </button>
            </>
          ) : (
            <button
              className="btn-primary"
              onClick={() => window.history.back()}
            >
              Seguir comprando
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
