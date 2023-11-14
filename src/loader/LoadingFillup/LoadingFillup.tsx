import React from 'react';
import './LoadingFillup.css';

interface LoadingFillupProps {
  value: number;
  containerSize?: string;
  fontSize?: string;
  backgroundColor?: string;
  fillColor?: string;
}

const LoadingFillup: React.FC<LoadingFillupProps> = ({
  value,
  containerSize = '150px',
  fontSize = '20px',
  backgroundColor = '#000046',
  fillColor = '#1CBB5E'
}) => {
    // To make sure value 1-100
  const normalizedValue = Math.min(Math.max(value, 0), 100);
   // Height of unfilled part
  const fillHeight = `${100 - normalizedValue}%`;

  const containerStyle = {
    width: containerSize,
    height: containerSize,
    backgroundColor: backgroundColor
  };

  const waterStyle = {
    top: fillHeight,
    backgroundColor: fillColor
  };

  const valueStyle = {
    fontSize: fontSize
  };

  return (
    <div className="fillup-container" style={containerStyle}>
      <div className="fillup-water" style={waterStyle} />
      <div className="fillup-value" style={valueStyle}>{normalizedValue}%</div>
    </div>
  );
};

export default LoadingFillup;
