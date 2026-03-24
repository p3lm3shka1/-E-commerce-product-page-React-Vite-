import "./QuantitySelector.scss";

function QuantitySelector({ cart }) {
  const { quantity, increase, decrease } = cart;

  return (
    <div className="quantity">
      <button onClick={decrease} aria-label="decrease">
        <img src="/src/assets/images/icon-minus.svg" alt="minus" />
      </button>
      <span>{quantity}</span>
      <button onClick={increase} aria-label="increase">
        <img src="/src/assets/images/icon-plus.svg" alt="plus" />
      </button>
    </div>
  );
}

export default QuantitySelector;
