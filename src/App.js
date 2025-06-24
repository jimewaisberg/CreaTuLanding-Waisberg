import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartScreen from "./components/CartScreen";
import CheckoutForm from "./components/CheckoutForm";
import NotFound from "./components/NotFound";
import { useCart } from "./context/CartContext";

/**
 * Root de la SPA. Ya no maneja lógica de carrito,
 * eso vive en CartContext.
 */
function App() {
  const { showCart } = useCart();

  return (
    <BrowserRouter>
      <NavBar />

      {showCart && <CartScreen />}

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
