import React from 'react';
import './BlobLoader.css';

interface BlobLoaderProps {
  backgroundColor?: string;
  size?: string;
}

const BlobLoader: React.FC<BlobLoaderProps> = ({
  backgroundColor = '#ff6b6b', 
  size = '100px', 
}) => {
  const loaderStyle = {
    width: size,
    height: size,
    background: backgroundColor
  };

  return <div className="blob-loader" style={loaderStyle}></div>;
};

export default BlobLoader;
