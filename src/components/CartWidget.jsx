import React, { useEffect, useState } from 'react';
import './CartWidget.css';

const CartWidget = ({ count }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setAnimate(true);
      const t = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(t);
    }
  }, [count]);

  return (
    <div className={`cart-widget ${animate ? 'animate' : ''}`}>
      🛒<span className="cart-widget__count">{count}</span>
    </div>
  );
};

export default CartWidget;
