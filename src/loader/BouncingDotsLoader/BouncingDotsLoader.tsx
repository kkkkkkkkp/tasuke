import React from 'react';
import './BouncingDotsLoader.css';

interface BouncingDotsLoaderProps {
  dotColor?: string;
  size?: string;
}

const BouncingDotsLoader: React.FC<BouncingDotsLoaderProps> = ({
  dotColor = 'pink',
  size = '10px', 
}) => {
  const dotStyle = {
    backgroundColor: dotColor,
    width: size,
    height: size,
  };

  return (
    <div className="bouncing-dots-loader">
      <div className="dot" style={dotStyle} />
      <div className="dot" style={dotStyle} />
      <div className="dot" style={dotStyle} />
    </div>
  );
};

export default BouncingDotsLoader;
