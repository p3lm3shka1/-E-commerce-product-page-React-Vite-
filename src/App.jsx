import { useMemo, useState } from "react";
import Header from "./components/Header/Header";
import ProductPage from "./components/Product/ProductPage";
import CartDropdown from "./components/Header/CartDropdown";
import Attribution from "./components/Attribution";
import "./App.scss";

const PRODUCT = {
  id: 1,
  company: "SNEAKER COMPANY",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125,
  oldPrice: 250,
  discount: 50,
  thumb: "/src/assets/images/image-product-1-thumbnail.jpg",
};

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 0 ? q - 1 : 0));

  const addToCart = () => {
    if (quantity <= 0) return;
    setCartItem({
      ...PRODUCT,
      quantity,
      total: PRODUCT.price * quantity,
    });
    setIsCartOpen(true);
  };

  const removeFromCart = () => setCartItem(null);
  const cartCount = cartItem?.quantity ?? 0;

  const cart = useMemo(
    () => ({
      product: PRODUCT,
      quantity,
      increase,
      decrease,
      addToCart,
      cartItem,
      removeFromCart,
      cartCount,
      isCartOpen,
      setIsCartOpen,
    }),
    [quantity, cartItem, cartCount, isCartOpen],
  );

  return (
    <>
      <Header cart={cart} />

      {isCartOpen && (
        <div className="cart-floating-layer">
          <div className="container cart-floating-anchor">
            <CartDropdown cart={cart} />
          </div>
        </div>
      )}

      <main className="container">
        <ProductPage cart={cart} />
      </main>
      <Attribution />
    </>
  );
}

export default App;
