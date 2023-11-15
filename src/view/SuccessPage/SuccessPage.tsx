import React from 'react';
import './SuccessPage.css';

interface SuccessPageProps {
  text?: string;
  textColor?: string;
  textSize?: string;
  svgSize?: number;
  backgroundColor?: string;
}

const SuccessPage: React.FC<SuccessPageProps> = ({
  text = 'Completed!',
  textColor = '#FFFFFF',
  textSize = '1.5em',
  svgSize = 100,
  backgroundColor = '#4CAF50',
}) => {
  return (
    <div className="success-page" style={{ backgroundColor }}>
      <div className="checkmark-circle" style={{ width: svgSize, height: svgSize }}>
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style={{ width: svgSize, height: svgSize }}>
          <circle className="checkmark-circle-bg" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
      </div>
      <div className="success-text" style={{ color: textColor, fontSize: textSize }}>{text}</div>
    </div>
  );
};

export default SuccessPage;
