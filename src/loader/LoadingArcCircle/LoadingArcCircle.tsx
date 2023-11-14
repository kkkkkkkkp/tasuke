import React from 'react';
import './LoadingArcCircle.css';

interface LoaderProps {
  borderColors?: string[];
  containerSize?: number;
}

const LoadingArcCircle: React.FC<LoaderProps> = ({
  borderColors = ['#3498db', '#e74c3c', '#f9c922'],
  containerSize = 80,
}) => {
  const arcSizes = [containerSize, containerSize * 0.75, containerSize * 0.5];
  const arcDelays = ['0s', '0.5s', '1s'];

  return (
    <div className="loader" style={{ width: containerSize, height: containerSize }}>
      {arcSizes.map((size, index) => (
        <div
          key={index}
          className={`arc`}
          style={{
            borderColor: 'transparent',
            borderTopColor: borderColors[index] || 'grey',
            width: `${size}px`,
            height: `${size}px`,
            animation: `spin 1s linear infinite ${arcDelays[index]}, fade 1.5s ease-in-out infinite ${arcDelays[index]}`
          }}
        ></div>
      ))}
    </div>
  );
};

export default LoadingArcCircle;
