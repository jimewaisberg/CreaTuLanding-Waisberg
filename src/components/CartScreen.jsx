import React from 'react';
import './CartScreen.css';

const CartScreen = ({ items, onClose, onChangeQty, onRemove }) => {
  const total = items.reduce(
    (sum, i) => sum + parseFloat(i.price.replace('$', '')) * i.qty,
    0
  );

  return (
    <div className="cart-screen">
      <div className="cart-screen__backdrop" onClick={onClose} />
      <div className="cart-screen__content fade-in">
        <button className="cart-screen__close" onClick={onClose}>
          X
        </button>
        <h2>Tu Carrito</h2>
        {items.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div className="cart-screen__items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item__info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <div className="cart-item__controls">
                    <button onClick={() => onChangeQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onChangeQty(item.id, 1)}>+</button>
                    <button className="remove" onClick={() => onRemove(item.id)}>
                      X
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-screen__footer">
          <p>Total: ${total.toFixed(2)}</p>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
