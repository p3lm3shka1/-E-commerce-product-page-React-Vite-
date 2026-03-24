import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";

import "./QuantitySelector.scss";

function QuantitySelector({ cart }) {
  const { quantity, increase, decrease } = cart;

  return (
    <div className="quantity">
      <button onClick={decrease} aria-label="decrease">
        <img src={iconMinus} alt="minus" />
      </button>
      <span>{quantity}</span>
      <button onClick={increase} aria-label="increase">
        <img src={iconPlus} alt="plus" />
      </button>
    </div>
  );
}

export default QuantitySelector;
