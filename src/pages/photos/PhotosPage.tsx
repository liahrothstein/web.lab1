import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { photos } from "@constants/photos";

import "./PhotosPage.scss";

export function PhotosPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(timer); // Очистка таймера при уходе со страницы
  }, []);

  return (
    <div className="photosPage">
      <div className="slideshow-container">
        <h1>Фотоальбом</h1>
        <div className="slide">
          <div className="image-wrapper">
            <img
              src={photos[currentIndex].image}
              alt={photos[currentIndex].caption}
            />
          </div>
          <div className="caption-box">
            <p>{photos[currentIndex].caption}</p>
            <span className="counter">
              {currentIndex + 1} / {photos.length}
            </span>
          </div>
        </div>
        <footer className="photos-footer">
          <Link to="/web.lab1/main" className="btn-back">
            <span className="icon">←</span> На главную
          </Link>
        </footer>
      </div>
    </div>
  );
}
