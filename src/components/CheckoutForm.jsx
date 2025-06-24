import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/ordersService";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cartItems, cartTotalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  if (cartItems.length === 0 && !orderId) {
    return (
      <div className="checkout-wrap">
        <p>El carrito está vacío.</p>
        <button className="btn-primary" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const id = await createOrder({
      buyer: form,
      items: cartItems,
      total: cartTotalPrice,
    });
    clearCart();
    setOrderId(id);
  };

  return (
    <div className="checkout-wrap">
      {orderId ? (
        <>
          <h2>¡Gracias por tu compra!</h2>
          <p>
            Tu número de orden es: <strong>{orderId}</strong>
          </p>
          <button className="btn-primary" onClick={() => navigate("/")}>
            Volver al inicio
          </button>
        </>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Datos de contacto</h2>

          <label>Nombre
            <input
              name="name"
              value={form.name}
              required
              onChange={handleChange}
            />
          </label>

          <label>Email
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
            />
          </label>

          <label>Teléfono
            <input
              name="phone"
              value={form.phone}
              required
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn-primary">
            Confirmar compra
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
