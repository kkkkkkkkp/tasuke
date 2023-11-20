import React, { useEffect, useState } from 'react';
import './LoadingSquares.css';

interface LoadingSquaresProps {
  size?: number;
  colorList?: string[];
  animationDelay?: number; // Delay in seconds between each square's animation
}

const LoadingSquares: React.FC<LoadingSquaresProps> = ({
  size = 50,
  colorList = ['#FF5733', '#FFC300', '#DAF7A6', '#33FFCE', '#3380FF'],
  animationDelay = 0.5, // half a second delay
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % colorList.length);
    }, animationDelay * 1000); // convert to milliseconds

    return () => clearInterval(interval);
  }, [colorList.length, animationDelay]);

  return (
    <div className="loading-squares-wrapper">
      {colorList.map((color, index) => (
        <div
          key={index}
          className={`square ${index === activeIndex ? 'active' : ''}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            animationDelay: `${index * animationDelay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default LoadingSquares;
