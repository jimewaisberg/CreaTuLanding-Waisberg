import "./CartScreen.css";

const CartScreen = ({ items, onClose, onChangeQty, onRemove }) => {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-box">
        <header className="cart-header">
          <h2>Tu carrito</h2>
          <button className="cart-close" onClick={onClose}>
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <p className="cart-empty">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map(i => (
                <li key={i.id} className="cart-item">
                  <img src={i.image} alt={i.name} />
                  <div className="cart-info">
                    <strong>{i.name}</strong>
                    <span>${i.price.toFixed(2)}</span>

                    <div className="cart-controls">
                      <div className="cart-qty">
                        <button
                          className="qty-btn"
                          onClick={() => onChangeQty(i.id, -1)}
                        >
                          −
                        </button>
                        <span className="qty-num">{i.qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => onChangeQty(i.id, +1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => onRemove(i.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="cart-footer">
              <span className="cart-total">Total: ${total.toFixed(2)}</span>
              <button className="btn-primary">Finalizar compra</button>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
