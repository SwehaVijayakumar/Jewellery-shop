import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css"; // ✅ CORRECT PLACE

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return <div className="wishlist-empty">Your wishlist is empty 💔</div>;
  }

  return (
    <div className="wishlist-page">
      <h2>My Wishlist ({wishlist.length})</h2>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div className="wishlist-card fade-in" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>
            <p>Rs. {item.price}</p>

            <button
              className="move-btn"
              onClick={() => {
                addToCart(item);
                removeFromWishlist(item.id);
              }}
            >
              MOVE TO CART
            </button>

            <button
              className="remove-btn"
              onClick={() => removeFromWishlist(item.id)}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
