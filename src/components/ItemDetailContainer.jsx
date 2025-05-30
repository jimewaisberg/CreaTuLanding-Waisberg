import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../products";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = ({ addToCart }) => {
  const [item, setItem] = useState(null);   // null = cargando
  const { itemId } = useParams();

  useEffect(() => {
    setItem(null);
    getProductById(itemId).then(setItem);
  }, [itemId]);

  return (
    <div style={{ padding: "2rem 1rem" }}>
      {item ? <ItemDetail product={item} addToCart={addToCart} /> : <Loader />}
    </div>
  );
};

export default ItemDetailContainer;
