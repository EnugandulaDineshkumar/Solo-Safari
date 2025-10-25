import React from "react";
import "./Carousel.css";

const Carousel = ({ images, onSelect }) => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {images.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => onSelect(item)}
          >
            <img src={item.url} alt={item.text} className="carousel-image" />
            <div className="carousel-caption">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
