import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  color?: string;
  size?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color = 'blue',
  size = '50px',
}) => {
  const spinnerStyle = {
    width: size,
    height: size,
    border: `4px solid rgba(255, 255, 255, 0.3)`,
    borderTopColor: color,
  };

  return <div className="spinner" style={spinnerStyle} data-testid="spinner"></div>;
};

export default LoadingSpinner;
