import { useState, useEffect } from "react";
import "./styles/hero-carousel.css"; // Aquí van los estilos

const HeroCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen automáticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Navegación manual
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="hero-carousel">
      <button className="nav left" onClick={goToPrevious}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="nav right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default HeroCarousel;
