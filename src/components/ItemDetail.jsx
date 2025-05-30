import { useState } from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product, addToCart }) => {
  const [units, setUnits] = useState(1);
  const handleAdd = () => addToCart({ ...product, qty: units });

  return (
    <section className="pd-container">
      <figure className="pd-image">
        <img src={product.image} alt={product.name} />
      </figure>

      <div className="pd-info">
        <h1 className="pd-name">{product.name}</h1>
        <p className="pd-desc">{product.description}</p>

        <div className="pd-buy">
          <span className="pd-price">${product.price}</span>
          <ItemCount stock={10} initial={1} onChange={setUnits} />
          <button className="btn-primary" onClick={handleAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
