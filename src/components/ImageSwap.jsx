import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ImageSwap = () => {
  const images = [
    "https://www.iitpkd.ac.in/sites/default/files/2023-11/sahya3.jpg",
    "https://www.iitpkd.ac.in/sites/default/files/2023-07/2Y4A6207.JPG",
    "https://www.iitpkd.ac.in/sites/default/files/styles/with_scale_/public/2024-05/Acheivement1.png?itok=EP7MWmnA",
    "https://www.iitpkd.ac.in/sites/default/files/2024-02/Priority1_Saraswati%20Block-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setFade(true);
    }, 500);
  };

  const goToNextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 500);
  };

  return (
    <Wrapper>
      <div className="image-container">
        <img
          className={`image ${fade ? "fade-in" : "fade-out"}`}
          src={images[currentIndex]}
          alt="Slideshow"
        />
        <button className="prev-button" onClick={goToPreviousImage}>
          <ChevronLeftIcon />
        </button>
        <button className="next-button" onClick={goToNextImage}>
          <ChevronRightIcon />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
    border-radius: 1px;
  }

  .fade-in {
    opacity: 1;
  }

  .fade-out {
    opacity: 0;
  }

  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 5px 2px;
    cursor: pointer;
    z-index: 1;
  }

  .prev-button:hover,
  .next-button:hover {
    opacity: 0.5;
  }

  .prev-button {
    left: 10px;
  }

  .next-button {
    right: 10px;
  }
`;

export default ImageSwap;
