import { useState } from "react";
import Lightbox from "./LightBox";
import iconPrev from "../../assets/images/icon-previous.svg";
import iconNext from "../../assets/images/icon-next.svg";

import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";

import thumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../../assets/images/image-product-4-thumbnail.jpg";

import "./ProductGallery.scss";

const images = [
  { full: img1, thumb: thumb1 },
  { full: img2, thumb: thumb2 },
  { full: img3, thumb: thumb3 },
  { full: img4, thumb: thumb4 },
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
          <img src={iconPrev} alt="previous" />
        </button>

        <img
          src={images[index].full}
          alt={`product-${index + 1}`}
          className="main-image"
          onClick={() => setLightboxOpen(true)}
        />

        <button className="arrow mobile-only" onClick={next} aria-label="next">
          <img src={iconNext} alt="next" />
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
