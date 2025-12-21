import React from "react";
import { useCart } from "../context/CartContext";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.qty * Number(item.price.replace(/,/g, "")),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <img src="/images/empty-cart.png" alt="Empty cart" />
        <h2>Your cart is empty</h2>
        <p>Add items to see them here</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* LEFT SIDE */}
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p className="cart-price">₹ {item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>
                  <FiMinus />
                </button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>
                  <FiPlus />
                </button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="price-box">
        <h3>Price Details</h3>

        <div className="price-row">
          <span>Total Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="price-row">
          <span>Delivery</span>
          <span className="free">FREE</span>
        </div>

        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹ {totalPrice.toLocaleString()}</span>
        </div>

        <button className="place-order">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
