import "./Lightbox.scss";

function Lightbox({ images, index, setIndex, onClose }) {
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="lightbox-overlay desktop-only">
      <div className="lightbox">
        <button className="close" onClick={onClose} aria-label="close">
          <img src="/src/assets/images/icon-close.svg" alt="close" />
        </button>

        <div className="lb-main-wrap">
          <button
            className="lb-arrow left"
            onClick={prev}
            aria-label="previous"
          >
            <img src="/src/assets/images/icon-previous.svg" alt="previous" />
          </button>

          <img
            src={images[index].full}
            alt="lightbox-product"
            className="lb-main"
          />

          <button className="lb-arrow right" onClick={next} aria-label="next">
            <img src="/src/assets/images/icon-next.svg" alt="next" />
          </button>
        </div>

        <div className="lb-thumbs">
          {images.map((img, i) => (
            <button
              key={img.thumb}
              className={`thumb ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <img src={img.thumb} alt={`lb-thumb-${i + 1}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
