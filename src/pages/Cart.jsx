import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (name) => {
    const updatedCart = cart.filter(item => item.name !== name);
    setCart(updatedCart);
  };

  return (
    <div className="page-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-list">
          {cart.map((item, idx) => (
            <div key={idx} className="product-card">
              <div className="image-box">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
