"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { toast, Toaster } from "sonner";

function Cart() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    isEmpty,
    emptyCart,
  } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      setFeedback("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setFeedback("");

    try {
      const res = await axios.post("/api/get-a-quote", {
        name,
        phone,
        email,
        message,
        total: cartTotal,
        products: items,
      });

      if (res.status === 200) {
        toast.success("Your quote request has been submitted successfully 😊");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        // Clear cart after 3 seconds
        setTimeout(() => {
          emptyCart();
        }, 3000);
      } else {
        toast.error("Something went wrong, please try again 😔");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, please try again 😔");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  if (isEmpty) {
    return (
      <div className="flex items-center justify-center h-64">
        <h4 className="text-xl font-semibold text-gray-600">
          Your cart is empty.
        </h4>
      </div>
    );
  }

  return (
    <div>
      <div className="th-cart-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-notices-wrapper">
            <div className="woocommerce-message">Request with confidence.</div>
          </div>
          <form className="woocommerce-cart-form" onSubmit={handleSubmit}>
            <div className="th-comment-form">
              <table className="cart_table">
                <thead>
                  <tr>
                    <th className="cart-col-image">Image</th>
                    <th className="cart-col-productname">Product Name</th>
                    <th className="cart-col-price">Price</th>
                    <th className="cart-col-quantity">Quantity</th>
                    <th className="cart-col-total">Total</th>
                    <th className="cart-col-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    const quantity = item.quantity ?? 1;

                    return (
                      <tr className="cart_item" key={item.id}>
                        <td>
                          <a
                            className="cart-productimage"
                            href={`/product/${item.slug}`}
                          >
                            <img
                              width="91"
                              height="91"
                              src={item.image}
                              alt={item.name}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            className="cart-productname"
                            href={`/product/${item.slug}`}
                          >
                            {item.name}
                          </a>
                        </td>
                        <td>
                          <span className="amount">
                            <bdi>${item.price.toFixed(2)}</bdi>
                          </span>
                        </td>
                        <td>
                          <div className="quantity">
                            <button
                              type="button"
                              className="quantity-minus qty-btn"
                              onClick={() =>
                                updateItemQuantity(item.id, quantity - 1)
                              }
                              disabled={quantity <= 1}
                            >
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              type="number"
                              className="qty-input"
                              value={quantity}
                              min="1"
                              max="99"
                              onChange={(e) =>
                                updateItemQuantity(
                                  item.id,
                                  parseInt(e.target.value) || 1
                                )
                              }
                            />
                            <button
                              type="button"
                              className="quantity-plus qty-btn"
                              onClick={() =>
                                updateItemQuantity(item.id, quantity + 1)
                              }
                            >
                              <i className="far fa-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <span className="amount">
                            <bdi>ETB: {(quantity * item.price).toFixed(2)}</bdi>
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="remove"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="fal fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="cart-total text-end mt-4">
                <h6>Total: ETB: {cartTotal.toFixed(2)}</h6>
              </div>

              <div className="row mt-4">
                <div className="col-12 form-group">
                  <textarea
                    placeholder="Please describe what you're looking for so we can provide an accurate quote."
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                  <i className="text-title far fa-pencil-alt"></i>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <i className="text-title far fa-user"></i>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <i className="text-title far fa-phone"></i>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <i className="text-title far fa-envelope"></i>
                </div>
                <div className="col-12 form-group">
                  <label htmlFor="reviewcheck">
                    Please make sure all details are filled in correctly so we
                    can provide you with an accurate quote.
                  </label>
                </div>

                <div className="col-12 form-group mb-0">
                  <button className="th-btn" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Get A Quote"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default Cart;
