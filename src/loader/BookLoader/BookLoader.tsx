import React from 'react';
import './BookLoader.css';

const BookOpeningLoader: React.FC = () => {
  return (
    <div className="book-opening-loader">
      <div className="book-cover"></div>
      <div className="book-page"></div>
    </div>
  );
};

export default BookOpeningLoader;
