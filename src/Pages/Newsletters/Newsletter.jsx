import React from 'react';
import HTMLFlipBook from 'react-pageflip'

const Newsletter = ({ pages,index }) => {
  return (
    <div className="flipbook-container">
      <HTMLFlipBook width={400} height={500} className='flipbook-container'>
        <p className='intro'>Newsletter {index+1}</p>
        {pages.map((page, index) => (
          <img key={index} src={page} alt={`Page ${index + 1}`} className="flipbook-page"  />
        ))}
        <p className='intro'>Thank you for reading!</p>
      </HTMLFlipBook>
    </div>
  );
};

export default Newsletter;
