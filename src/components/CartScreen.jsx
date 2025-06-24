import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartScreen.css";

const CartScreen = () => {
  const {
    cartItems,
    changeQty,
    removeItem,
    cartTotalPrice,
    setShowCart,
  } = useCart();
  const navigate = useNavigate();

  const close = () => setShowCart(false);

  return (
    <div className="cart-overlay">
      <div className="cart-box">
        <header className="cart-header">
          <h2>Tu carrito</h2>
          <button className="cart-close" onClick={close}>
            ×
          </button>
        </header>

        {cartItems.length === 0 ? (
          <p className="cart-empty">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map(item => {
                const priceNum = Number(item.price) || 0;
                return (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-info">
                      <strong>{item.name}</strong>
                      <span>${priceNum.toFixed(2)}</span>

                      <div className="cart-controls">
                        <div className="cart-qty">
                          <button
                            className="qty-btn"
                            onClick={() => changeQty(item.id, -1)}
                          >
                            −
                          </button>
                          <span className="qty-num">{item.qty}</span>
                          <button
                            className="qty-btn"
                            onClick={() => changeQty(item.id, +1)}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <footer className="cart-footer">
              <span className="cart-total">
                Total: ${cartTotalPrice.toFixed(2)}
              </span>
              <button
                className="btn-primary"
                onClick={() => {
                  close();
                  navigate("/checkout");
                }}
              >
                Finalizar compra
              </button>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
