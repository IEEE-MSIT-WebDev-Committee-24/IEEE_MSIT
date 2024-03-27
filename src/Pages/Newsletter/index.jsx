import React from 'react'   
import './style.css';
import Newsletter1 from './Newsletter1';
import Newsletter2 from './Newsletter2';
import Newsletter3 from './Newsletter3';

const Newsletter = () => {
  return (
      <div className="page">
        <h1 className='heading'>IEEE NEWSLETTERS</h1>
        <div className="newsletters">
        <Newsletter1 />
        <Newsletter2 />
        <Newsletter3 />
        </div>
      </div>
  )
}

export default Newsletter
