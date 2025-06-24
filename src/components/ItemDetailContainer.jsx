import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productsService";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

/**
 * Contenedor que busca un producto por ID en Firestore
 * y delega la UI en ItemDetail
 */
const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null); // null = cargando

  useEffect(() => {
    setItem(null);
    getProduct(itemId).then(setItem);
  }, [itemId]);

  return (
    <div style={{ padding: "2rem 1rem" }}>
      {item ? <ItemDetail product={item} /> : <Loader />}
    </div>
  );
};

export default ItemDetailContainer;
