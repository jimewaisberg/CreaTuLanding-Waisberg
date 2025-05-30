import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const shortDesc =
    product.description.length > 60
      ? product.description.slice(0, 57) + "..."
      : product.description;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-body">
        <span className="product-cat">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-desc">{shortDesc}</p>
        <strong className="product-price">${product.price}</strong>

        <Link to={`/item/${product.id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
