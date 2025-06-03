import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

const QuantityInput = ({ item }: any) => {
  const { updateItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);
  console.log(item)

  const min = 1;
  const max = 1000;

  const handleIncrease = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      updateItemQuantity(item.id, newQty);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateItemQuantity(item.id, newQty);
    }
  };

  const handleInputChange = (e: any) => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setQuantity(value);
    updateItemQuantity(item.id, value);
  };

  // Sync quantity if external cart change happens
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <div className="quantity">
      <input
        type="number"
        className="qty-input"
        step={1}
        min={min}
        max={max}
        name="quantity"
        value={quantity}
        title="Qty"
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="quantity-plus qty-btn"
        onClick={handleIncrease}
      >
        <i className="far fa-chevron-up"></i>
      </button>
      <button
        type="button"
        className="quantity-minus qty-btn"
        onClick={handleDecrease}
      >
        <i className="far fa-chevron-down"></i>
      </button>
    </div>
  );
};

export default QuantityInput;
