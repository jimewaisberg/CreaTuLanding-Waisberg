import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../products";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({ addToCart }) => {
  const [items, setItems] = useState(null);      // null = aún cargando
  const { categoryId } = useParams();

  useEffect(() => {
    setItems(null);                              // muestra loader al cambiar categoría
    const fetch = categoryId ? getProductsByCategory : getProducts;
    fetch(categoryId).then(setItems);
  }, [categoryId]);

  if (items === null) return <Loader />;

  if (items.length === 0)
    return (
      <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
        <h3>No hay productos en esta categoría.</h3>
      </div>
    );

  return (
    <section className="products-section">
      <h2>Catálogo</h2>
      <ItemList products={items} addToCart={addToCart} />
    </section>
  );
};

export default ItemListContainer;
