import { useState } from "react";
import Lightbox from "./LightBox";
import "./ProductGallery.scss";

const images = [
  {
    full: "/src/assets/images/image-product-1.jpg",
    thumb: "/src/assets/images/image-product-1-thumbnail.jpg",
  },
  {
    full: "/src/assets/images/image-product-2.jpg",
    thumb: "/src/assets/images/image-product-2-thumbnail.jpg",
  },
  {
    full: "/src/assets/images/image-product-3.jpg",
    thumb: "/src/assets/images/image-product-3-thumbnail.jpg",
  },
  {
    full: "/src/assets/images/image-product-4.jpg",
    thumb: "/src/assets/images/image-product-4-thumbnail.jpg",
  },
];

function ProductGallery() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="gallery">
      <div className="main-image-wrap">
        <button
          className="arrow mobile-only"
          onClick={prev}
          aria-label="previous"
        >
          <img src="/src/assets/images/icon-previous.svg" alt="previous" />
        </button>

        <img
          src={images[index].full}
          alt={`product-${index + 1}`}
          className="main-image"
          onClick={() => setLightboxOpen(true)}
        />

        <button className="arrow mobile-only" onClick={next} aria-label="next">
          <img src="/src/assets/images/icon-next.svg" alt="next" />
        </button>
      </div>

      <div className="thumbs desktop-only">
        {images.map((img, i) => (
          <button
            key={img.thumb}
            className={`thumb ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <img src={img.thumb} alt={`thumb-${i + 1}`} />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={index}
          setIndex={setIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductGallery;
