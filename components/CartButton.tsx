// components/CartButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { useRouter } from "next/navigation";


const CartButton = () => {
    const router = useRouter();

  const { totalUniqueItems } = useCart();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <button
      onClick={() => router.push("/get-a-quote")}
      type="button"
      className="icon-btn sideMenuCart"
    >
      <span className="badge">{totalUniqueItems}</span>
      <i className="far fa-cart-shopping"></i>
    </button>
  );
};

export default CartButton;
