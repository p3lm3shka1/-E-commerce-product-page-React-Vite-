import QuantitySelector from "./QuantitySelector";
import "./ProductInfo.scss";

function ProductInfo({ product, cart }) {
  const { addToCart } = cart;

  return (
    <div className="product-info">
      <h2 className="company">{product.company}</h2>
      <h1 className="title">{product.title}</h1>
      <p className="desc">{product.description}</p>

      <div className="price-row">
        <div className="now-wrap">
          <span className="now">${product.price.toFixed(2)}</span>
          <span className="discount">{product.discount}%</span>
        </div>
        <span className="old">${product.oldPrice.toFixed(2)}</span>
      </div>

      <div className="actions">
        <QuantitySelector cart={cart} />
        <button className="add-btn" onClick={addToCart}>
          <img src="/src/assets/images/icon-cart.svg" alt="cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
