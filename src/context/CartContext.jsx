import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  /* ---------- estado carrito ---------- */
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  /* ---------- visibilidad modal ---------- */
  const [showCart, setShowCart] = useState(false);

  /* ---------- persistencia ---------- */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ---------- acciones ---------- */
  const addToCart = (product, qty = 1) =>
    setCartItems(curr => {
      const idx = curr.findIndex(p => p.id === product.id);
      if (idx !== -1) {
        const clone = [...curr];
        clone[idx].qty += qty;
        return clone;
      }
      return [...curr, { ...product, qty }];
    });

  const changeQty = (id, delta) =>
    setCartItems(curr =>
      curr.map(p =>
        p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p
      )
    );

  const removeItem = id =>
    setCartItems(curr => curr.filter(p => p.id !== id));

  const clearCart = () => setCartItems([]);

  /* ---------- derivados ---------- */
  const cartTotalQty = cartItems.reduce((s, i) => s + i.qty, 0);
  const cartTotalPrice = cartItems.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        changeQty,
        removeItem,
        clearCart,
        cartTotalQty,
        cartTotalPrice,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
