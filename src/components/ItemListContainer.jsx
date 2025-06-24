import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../services/productsService";
import ItemList from "./ItemList";
import Loader from "./Loader";

/**
 * Contenedor que se encarga de:
 * 1) Pedir datos a Firestore (todo o filtrado por categoría)
 * 2) Mostrar loader / mensaje vacío
 * 3) Renderizar ItemList (presentacional)
 */
const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState(null); // null = aún cargando

  useEffect(() => {
    setItems(null); // muestra loader en cada cambio
    const fetch = categoryId ? getProductsByCategory : getProducts;
    fetch(categoryId)
      .then(setItems)
      .catch(() => setItems([]));
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
      <ItemList products={items} />
    </section>
  );
};

export default ItemListContainer;
