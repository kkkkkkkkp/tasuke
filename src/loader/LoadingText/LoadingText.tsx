import React from 'react';
import './LoadingText.css';

interface LoadingTextProps {
  color?: string;
  size?: string;
}

const LoadingText: React.FC<LoadingTextProps> = ({ color = 'black', size = '20px' }) => {
  const loadingTextStyle = {
    color: color,
    fontSize: size,
  };

  return (
    <div className="loading-text" style={loadingTextStyle}>
      Loading<span>.</span><span>.</span><span>.</span>
    </div>
  );
};

export default LoadingText;
