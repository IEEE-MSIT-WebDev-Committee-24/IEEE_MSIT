import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import '../style.css';
import coverImage from '../assets/cover.jpeg';
import page1 from '../assets/Newsletter1/page1.jpeg'
import page2 from '../assets/Newsletter1/page2.jpeg'
import page3 from '../assets/Newsletter1/page3.jpeg'
import page4 from '../assets/Newsletter1/page4.jpeg'
import last from '../assets/last.jpeg'

const Newsletter1 = () => {
  return (
    <HTMLFlipBook width={300} height={500}  className='flipbook-container'>
            <p className='intro'>Newsletter 1</p>
            <img src={coverImage} alt="" className='flipbook-page' />
            <img src={page1} alt="" className='flipbook-page' />
            <img src={page2} alt="" className='flipbook-page' />
            <img src={page3} alt="" className='flipbook-page' />
            <img src={page4} alt="" className='flipbook-page' />
            <img src={last} alt="" className='flipbook-page' />
            <p className='intro'>Thank You for reading!</p>
        </HTMLFlipBook>
  )
}

export default Newsletter1
