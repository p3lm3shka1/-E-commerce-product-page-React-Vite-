import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import "./ProductPage.scss";

function ProductPage({ cart }) {
  return (
    <section className="product-page">
      <ProductGallery />
      <ProductInfo product={cart.product} cart={cart} />
    </section>
  );
}

export default ProductPage;
