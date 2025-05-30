import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartScreen from "./components/CartScreen";
import NotFound from "./components/NotFound";

function App() {
  /* ---------- carrito con persistencia ---------- */
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [showCart, setShowCart] = useState(false);

  const addToCart = prod =>
    setCartItems(curr => {
      const idx = curr.findIndex(p => p.id === prod.id);
      if (idx !== -1) {
        const clone = [...curr];
        clone[idx].qty += prod.qty;
        return clone;
      }
      return [...curr, prod];
    });

  const changeQty = (id, d) =>
    setCartItems(curr =>
      curr.map(p => (p.id === id ? { ...p, qty: Math.max(1, p.qty + d) } : p))
    );

  const removeItem = id =>
    setCartItems(curr => curr.filter(p => p.id !== id));
  /* --------------------------------------------- */

  return (
    <BrowserRouter>
      <NavBar
        count={cartItems.reduce((s, i) => s + i.qty, 0)}
        onCartClick={() => setShowCart(true)}
      />

      {showCart && (
        <CartScreen
          items={cartItems}
          onClose={() => setShowCart(false)}
          onChangeQty={changeQty}
          onRemove={removeItem}
        />
      )}

      <Routes>
        <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer addToCart={addToCart} />}
        />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer addToCart={addToCart} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
