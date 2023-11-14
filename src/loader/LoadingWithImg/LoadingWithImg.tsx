import React from 'react';
import './LoadingWithImg.css';

interface LoadingWithImgProps {
  color?: string;
  size?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const LoadingWithImg: React.FC<LoadingWithImgProps> = ({
  color = 'grey',
  size = '20px',
  image = 'https://res.cloudinary.com/djqqn4rpp/image/upload/v1699965693/s2ymyfgudam7kezgcnxn.gif',
  imageWidth = 300,
  imageHeight = 250
}) => {
  const loadingTextStyle = {
    color: color,
    fontSize: size,
  };

  return (
    <div className="loading-container">
      <img src={image} alt='Loading Image' width={imageWidth} height={imageHeight}/>
      <div className="loading-text" style={loadingTextStyle}>
        LOADING<span>.</span><span>.</span><span>.</span>
      </div>
    </div>
  );
};

export default LoadingWithImg;
