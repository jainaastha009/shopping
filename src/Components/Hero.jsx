import React, { useState, useEffect } from 'react';

const Hero = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalItems]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  return (
    <div className="relative overflow-hidden ">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[100%]  rounded-3xl">
            <img src={image} alt={`Slide ${index}`} className="w-full " />
          </div>
        ))}
      </div>
      <button 
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 left-4" 
        onClick={goToPreviousSlide}
      >
        ‹
      </button>
      <button 
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 right-4" 
        onClick={goToNextSlide}
      >
        ›
      </button>
    </div>
  );
};

export default Hero;
