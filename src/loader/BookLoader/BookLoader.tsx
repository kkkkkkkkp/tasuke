import React from 'react';
import './BookLoader.css';

interface BookLoaderProps {
  color?: string;
  pageCount?: number;
}

const BookLoader: React.FC<BookLoaderProps> = ({ color = 'green', pageCount = 4 }) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="wrapper">
      <div className="book-loader-container" style={{ '--color': color } as React.CSSProperties}>
        <div className="spine"></div>
        {pages.map(num => (
          <div key={num} className="page" style={{ '--page-num': num } as React.CSSProperties}></div>
        ))}
        <div className="page static right"></div>
        <div className="page static left"></div>
      </div>
    </div>
  );
};

export default BookLoader;
