import React from 'react';
import './LoadingFiveCircle.css';


interface LoadingFiveCirclerProps {
    colors?: string[];
    size?: number;
  }

const LoadingFiveCircle: React.FC<LoadingFiveCirclerProps> = ({
    colors = ['#ff4f4f', '#4fafff', '#ffd24f', '#49ff4f', '#d24fff'],
    size = 20, 
}) => {
  return (
    <div className="loader">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`dot dot-${index + 1}`}
          style={{ backgroundColor: color, width: size + 'px', height: size + 'px' }}
        ></div>
      ))}
    </div>
  );
};

export default LoadingFiveCircle;
