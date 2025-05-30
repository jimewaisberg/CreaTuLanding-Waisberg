import { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onChange }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => onChange && onChange(count), [count, onChange]);

  return (
    <div className="ic-wrapper">
      <button className="ic-btn" onClick={() => count > 1 && setCount(count - 1)}>−</button>
      <span className="ic-count">{count}</span>
      <button className="ic-btn" onClick={() => count < stock && setCount(count + 1)}>+</button>
    </div>
  );
};

export default ItemCount;
