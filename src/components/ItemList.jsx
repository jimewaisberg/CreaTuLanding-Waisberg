import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map(p => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ItemList;
