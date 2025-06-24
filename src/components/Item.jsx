import { Link } from "react-router-dom";

const Item = ({ product }) => {
  // Si no existe description, usamos cadena vacía
  const desc = product.description ?? "";
  const shortDesc =
    desc.length > 60 ? desc.slice(0, 57) + "..." : desc;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-body">
        <span className="product-cat">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-desc">{shortDesc}</p>
        {product.price !== undefined && (
          <strong className="product-price">${product.price}</strong>
        )}

        <Link to={`/item/${product.id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
