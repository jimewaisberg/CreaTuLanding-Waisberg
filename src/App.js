import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartScreen from './components/CartScreen';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = product => {
    setCartItems(items => {
      const exists = items.find(i => i.id === product.id);
      if (exists) {
        return items.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...items, { ...product, qty: 1 }];
      }
    });
  };

  const changeQty = (id, delta) => {
    setCartItems(items =>
      items
        .map(i =>
          i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const removeItem = id => {
    setCartItems(items => items.filter(i => i.id !== id));
  };

  const clearSelection = () => setSelectedProduct(null);

  return (
    <div id="inicio">
      <NavBar
        count={cartItems.reduce((sum, i) => sum + i.qty, 0)}
        onCartClick={() => setShowCart(true)}
        onClearSelection={clearSelection}
      />

      {showCart && (
        <CartScreen
          items={cartItems}
          onClose={() => setShowCart(false)}
          onChangeQty={changeQty}
          onRemove={removeItem}
        />
      )}

      <ItemListContainer
        greeting="Elige tu botella perfecta"
        addToCart={addToCart}
        selected={selectedProduct}
        onView={setSelectedProduct}
      />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
