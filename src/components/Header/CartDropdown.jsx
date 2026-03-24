import "./CartDropdown.scss";

function CartDropdown({ cart }) {
  const { cartItem, removeFromCart } = cart;

  return (
    <div className="cart-dropdown" role="dialog" aria-label="Cart dropdown">
      <h3>Cart</h3>
      <div className="divider" />

      {!cartItem ? (
        <div className="empty">Your cart is empty.</div>
      ) : (
        <div className="content">
          <div className="item">
            <img
              src={cartItem.thumb}
              alt="product thumbnail"
              className="item-thumb"
            />

            <div className="item-info">
              <p>{cartItem.title}</p>
              <p>
                ${cartItem.price.toFixed(2)} x {cartItem.quantity}{" "}
                <strong>${cartItem.total.toFixed(2)}</strong>
              </p>
            </div>

            <button
              className="delete-btn"
              onClick={removeFromCart}
              aria-label="Remove item"
              type="button"
            >
              <img src="/src/assets/images/icon-delete.svg" alt="delete icon" />
            </button>
          </div>

          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartDropdown;
